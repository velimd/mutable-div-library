import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Position} from '../model/position.model';

@Component({
  selector: 'lib-resize-handlers',
  templateUrl: './resize-handlers.component.html',
  styleUrls: ['./resize-handlers.component.css']
})
export class ResizeHandlersComponent implements AfterViewInit {

  @Input() parentElement: ElementRef;

  @ViewChildren('handle') handles: QueryList<ElementRef>;

  minimumSize = 20;

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
      const width = parentElement.offsetWidth - coordinates.x;
      const height = parentElement.offsetHeight - coordinates.y;
      if (width > this.minimumSize) {
        parentElement.style.left = parentElement.offsetLeft + coordinates.x + 'px';
        parentElement.style.width = width + 'px';

      }
      if (height > this.minimumSize) {
        parentElement.style.top = parentElement.offsetTop + coordinates.y + 'px';
        parentElement.style.height = height + 'px';
      }
    } else if (className.includes('TOP-RIGHT')) {
      const width = parentElement.offsetWidth + coordinates.x;
      const height = parentElement.offsetHeight - coordinates.y;
      if (width > this.minimumSize) {
        parentElement.style.width = width + 'px';
      }
      if (height > this.minimumSize) {
        parentElement.style.top = parentElement.offsetTop + coordinates.y + 'px';
        parentElement.style.height = height + 'px';
      }
    } else if (className.includes('BOTTOM-LEFT')) {
      const width = parentElement.offsetWidth - coordinates.x;
      const height = parentElement.offsetHeight + coordinates.y;
      if (width > this.minimumSize) {
        parentElement.style.left = parentElement.offsetLeft + coordinates.x + 'px';
        parentElement.style.width = width + 'px';
      }
      if (height > this.minimumSize) {
        parentElement.style.height = height + 'px';
      }
    } else if (className.includes('BOTTOM-RIGHT')) {
      const width = parentElement.offsetWidth + coordinates.x;
      const height = parentElement.offsetHeight + coordinates.y;
      if (width > this.minimumSize) {
        parentElement.style.width = width + 'px';
      }
      if (height > this.minimumSize) {
        parentElement.style.height = height + 'px';
      }
    }
    this.setHandlePositions();
  }
}
