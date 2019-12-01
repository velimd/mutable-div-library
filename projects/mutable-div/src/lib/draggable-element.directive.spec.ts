import { DraggableElementDirective } from './draggable-element.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {ResizeHandlersComponent} from './resize-handlers/resize-handlers.component';

describe('DraggableElementDirective', () => {
  let component: ResizeHandlersComponent;
  let fixture: ComponentFixture<ResizeHandlersComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableElementDirective, ResizeHandlersComponent]
    });
    fixture = TestBed.createComponent(ResizeHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divEl = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    const directive = new DraggableElementDirective(divEl);
    expect(directive).toBeTruthy();
  });
});
