import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Position} from '../model/position.model';
import {Size} from '../model/size.model';
import {HandleBar} from '../model/handle-bar.model';

@Component({
  selector: 'lib-resize-handlers',
  templateUrl: './resize-handlers.component.html',
  styleUrls: ['./resize-handlers.component.css']
})
export class ResizeHandlersComponent implements AfterViewInit {

  @Input() parentElement: ElementRef;
  @Input() rotate: number;

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
          this.setHandleStyles(element, { left: '-7px', right: '', top: '-7px', bottom: '' });
          break;
        case 1:
          this.setHandleStyles(element, { left: '', right: '-7px', top: '-7px', bottom: '' });
          break;
        case 2:
          this.setHandleStyles(element, { left: '-7px', right: '', top: '', bottom: '-7px' });
          break;
        default:
          this.setHandleStyles(element, { left: '', right: '-7px', top: '', bottom: '-7px' });
      }
    });
  }

  setHandleStyles(element: ElementRef, styles: HandleBar) {
    element.nativeElement.style.left = styles.left;
    element.nativeElement.style.right = styles.right;
    element.nativeElement.style.top = styles.top;
    element.nativeElement.style.bottom = styles.bottom;
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
