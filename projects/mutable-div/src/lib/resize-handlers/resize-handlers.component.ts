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

  elementSize: Size;
  originalPosition: Position;

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

  private setOriginalPosition(event: MouseEvent): void {
    this.originalPosition = {
      x: event.clientX,
      y: event.clientY
    };
  }

  onMouseDown(event: MouseEvent) {
    event.stopPropagation();
    this.setOriginalPosition(event);
  }

  resize(className: string, event: MouseEvent) {
    if (className.includes('BOTTOM-RIGHT')) {
      this.parentElement.nativeElement.style.width =
        this.parentElement.nativeElement.style.width + (event.clientX - this.originalPosition.x) + 'px';
      this.parentElement.nativeElement.style.height =
        this.parentElement.nativeElement.style.height + (event.clientY - this.originalPosition.y) + 'px';
    }
  }
}
