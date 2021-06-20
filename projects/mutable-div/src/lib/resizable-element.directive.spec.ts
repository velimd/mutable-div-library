import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ResizableElementDirective } from './resizable-element.directive';
import { ResizeHandlersComponent } from './resize-handlers/resize-handlers.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  template: `
    <div class="rectangle" style="left: 0; top: 0; width: 100px; height: 100px;" resizable [rotate]="rotate" [selected]="selected">
      Test Block
    </div>`
})
class TestComponent {
  rotate = 0;
  selected = false;
}

describe('ResizableElementDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResizableElementDirective, ResizeHandlersComponent, TestComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ResizeHandlersComponent]
      }
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divEl = fixture.debugElement.query(By.css('.rectangle'));
  });

  it('select div and handle bars should appear', () => {
    divEl.nativeElement.dispatchEvent(new MouseEvent('pointerdown'));
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.resize-handlers'))).toBeTruthy();

    divEl.nativeElement.dispatchEvent(new MouseEvent('pointerup'));
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.resize-handlers'))).toBeTruthy();
  });

  it('select div and handle bars should disappear when selecting else where', () => {
    divEl.nativeElement.dispatchEvent(new MouseEvent('pointerdown'));
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.resize-handlers'))).toBeTruthy();

    document.dispatchEvent(new MouseEvent('pointerup', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.resize-handlers'))).toBeFalsy();
  });
});
