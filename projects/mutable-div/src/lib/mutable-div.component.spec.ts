import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutableDivComponent } from './mutable-div.component';

describe('MutableDivComponent', () => {
  let component: MutableDivComponent;
  let fixture: ComponentFixture<MutableDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutableDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
