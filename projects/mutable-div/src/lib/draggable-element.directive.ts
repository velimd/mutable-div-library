import { Directive, ElementRef, HostListener } from '@angular/core';
import { Position } from './model/position.model';

@Directive({
  selector: '[draggable]'
})
export class DraggableElementDirective {

  originalPosition: Position;
  private mouseDown: boolean = false;

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.position = 'absolute';
  }

  @HostListener('mousedown') onMouseDown() {
    this.mouseDown = true;
    this.originalPosition = {
      x: this.elementRef.nativeElement.offsetLeft,
      y: this.elementRef.nativeElement.offsetTop
    };
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.mouseDown) {
      this.elementRef.nativeElement.style.left = event.clientX + 'px';
      this.elementRef.nativeElement.style.top = event.clientY + 'px';
    }
  }

  @HostListener('mouseup') onMouseUp() {
    this.mouseDown = false;
  }
}
