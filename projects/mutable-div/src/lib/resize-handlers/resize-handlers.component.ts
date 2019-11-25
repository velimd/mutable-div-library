import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Size} from '../model/size.model';
import {Position} from '../model/position.model';

@Component({
  selector: 'lib-resize-handlers',
  templateUrl: './resize-handlers.component.html',
  styleUrls: ['./resize-handlers.component.css']
})
export class ResizeHandlersComponent implements AfterViewInit {

  @Input() parentElement: ElementRef;

  @ViewChildren('handle') handles: QueryList<ElementRef>;

  originalPosition: Position;

  constructor() { }

  ngAfterViewInit(): void {
    this.setHandlePositions();
  }

  setHandlePositions(): void {
    this.handles.forEach((element, index) => {
      switch (index) {
        case 0:
          element.nativeElement.style.left = '-5px';
          element.nativeElement.style.top = '-5px';
          element.nativeElement.style.right = '';
          element.nativeElement.style.bottom = '';
          break;
        case 1:
          element.nativeElement.style.right = '-5px';
          element.nativeElement.style.top = '-5px';
          element.nativeElement.style.left = '';
          element.nativeElement.style.bottom = '';
          break;
        case 2:
          element.nativeElement.style.left = '-5px';
          element.nativeElement.style.bottom = '-5px';
          element.nativeElement.style.right = '';
          element.nativeElement.style.top = '';
          break;
        case 3:
          element.nativeElement.style.right = '-5px';
          element.nativeElement.style.bottom = '-5px';
          element.nativeElement.style.left = '';
          element.nativeElement.style.top = '';
          break;
      }
    });
  }

  onMouseDown(event: MouseEvent) {
    event.stopPropagation();
  }

  resize(className: string, coordinates: Position) {
    const parentElement = this.parentElement.nativeElement;
    if (className.includes('TOP-LEFT')) {
      parentElement.style.left = parentElement.offsetLeft + coordinates.x + 'px';
      parentElement.style.top = parentElement.offsetTop + coordinates.y + 'px';
      parentElement.style.width =
        Math.max(parentElement.offsetWidth - coordinates.x, 20) + 'px';
      parentElement.style.height =
        Math.max(parentElement.offsetHeight - coordinates.y, 20) + 'px';
    } else if (className.includes('TOP-RIGHT')) {
      parentElement.style.width =
        Math.max(parentElement.offsetWidth + coordinates.x, 20) + 'px';
      parentElement.style.top = parentElement.offsetTop + coordinates.y + 'px';
      parentElement.style.height =
        Math.max(parentElement.offsetHeight - coordinates.y, 20) + 'px';
    } else if (className.includes('BOTTOM-LEFT')) {
      parentElement.style.left = parentElement.offsetLeft + coordinates.x + 'px';
      parentElement.style.width =
        Math.max(parentElement.offsetWidth - coordinates.x, 20) + 'px';
      parentElement.style.height =
        Math.max(parentElement.offsetHeight + coordinates.y, 20) + 'px';
    } else if (className.includes('BOTTOM-RIGHT')) {
      parentElement.style.width =
        Math.max(parentElement.offsetWidth + coordinates.x, 20) + 'px';
      parentElement.style.height =
        Math.max(parentElement.offsetHeight + coordinates.y, 20) + 'px';
    }
    this.setHandlePositions();
  }
}
