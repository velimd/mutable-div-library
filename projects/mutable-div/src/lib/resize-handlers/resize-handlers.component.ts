import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Position} from '../model/position.model';
import {Size} from '../model/size.model';

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
          element.nativeElement.style.left = '-7px';
          element.nativeElement.style.top = '-7px';
          element.nativeElement.style.right = '';
          element.nativeElement.style.bottom = '';
          break;
        case 1:
          element.nativeElement.style.right = '-7px';
          element.nativeElement.style.top = '-7px';
          element.nativeElement.style.left = '';
          element.nativeElement.style.bottom = '';
          break;
        case 2:
          element.nativeElement.style.left = '-7px';
          element.nativeElement.style.bottom = '-7px';
          element.nativeElement.style.right = '';
          element.nativeElement.style.top = '';
          break;
        case 3:
          element.nativeElement.style.right = '-7px';
          element.nativeElement.style.bottom = '-7px';
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
    const size: Size = {
      width: className.includes('LEFT') ? parentElement.offsetWidth - coordinates.x : parentElement.offsetWidth + coordinates.x,
      height: className.includes('TOP') ?  parentElement.offsetHeight - coordinates.y :  parentElement.offsetHeight + coordinates.y,
      position: {
        x: parentElement.offsetLeft + coordinates.x,
        y: parentElement.offsetTop + coordinates.y
      }
    };
    if (size.width > this.minimumSize && size.height > this.minimumSize) {
      if (className.includes('TOP-LEFT')) {
        parentElement.style.left = size.position.x + 'px';
        parentElement.style.width = size.width + 'px';
        parentElement.style.top =  size.position.y + 'px';
        parentElement.style.height = size.height + 'px';
      } else if (className.includes('TOP-RIGHT')) {
        parentElement.style.width = size.width + 'px';
        parentElement.style.top = size.position.y + 'px';
        parentElement.style.height = size.height + 'px';
      } else if (className.includes('BOTTOM-LEFT')) {
        parentElement.style.left = size.position.x + 'px';
        parentElement.style.width = size.width + 'px';
        parentElement.style.height = size.height + 'px';
      } else {
        parentElement.style.width = size.width + 'px';
        parentElement.style.height = size.height + 'px';
      }
    }
    this.setHandlePositions();
  }
}
