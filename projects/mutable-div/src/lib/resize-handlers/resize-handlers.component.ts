import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'lib-resize-handlers',
  templateUrl: './resize-handlers.component.html',
  styleUrls: ['./resize-handlers.component.css']
})
export class ResizeHandlersComponent implements AfterViewInit {

  @Input() height: number;
  @Input() width: number;

  @ViewChildren('handle') handles: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    this.setHandlePositions();
  }

  setHandlePositions(): void {
    this.handles.forEach((element, index) => {
      switch (index) {
        case 0:
          element.nativeElement.style.top = '-5px';
          element.nativeElement.style.left = '-5px';
          break;
        case 1:
          element.nativeElement.style.top = '-5px';
          element.nativeElement.style.right = '-5px';
          break;
        case 2:
          element.nativeElement.style.bottom = '-5px';
          element.nativeElement.style.left = '-5px';
          break;
        case 3:
          element.nativeElement.style.bottom = '-5px';
          element.nativeElement.style.right = '-5px';
          break;
      }
    });
  }
}
