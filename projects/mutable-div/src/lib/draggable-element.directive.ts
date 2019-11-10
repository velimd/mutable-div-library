import { Directive, ElementRef, HostListener } from '@angular/core';
import { Position } from './model/position.model';

@Directive({
  selector: '[draggable]'
})
export class DraggableElementDirective {

  originalPosition: Position;
  private mouseDown: boolean = false;

  constructor(private el: ElementRef) {
    el.nativeElement.style.position = 'absolute';
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.mouseDown = true;
    this.originalPosition = {
      x: event.clientX,
      y: event.clientY
    };
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (this.mouseDown) {
      const element = this.el.nativeElement;
      const newPosition: Position = {
        x: event.clientX - this.originalPosition.x ,
        y: event.clientY - this.originalPosition.y
      };
      this.originalPosition = {
        x: event.clientX,
        y: event.clientY
      };
      element.style.left = (element.offsetLeft + newPosition.x) + 'px';
      element.style.top = (element.offsetTop + newPosition.y) + 'px';
    }
  }

  @HostListener('mouseup') onMouseUp() {
    this.mouseDown = false;
  }
}
