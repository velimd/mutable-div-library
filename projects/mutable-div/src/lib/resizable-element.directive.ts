import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef, EventEmitter,
  HostListener,
  Input, Output,
  ViewContainerRef
} from '@angular/core';
import { ResizeHandlersComponent } from './resize-handlers/resize-handlers.component';

@Directive({
  selector: '[resizable]'
})
export class ResizableElementDirective implements AfterViewInit {

  @Input() rotate = 0;
  @Output() stopped = new EventEmitter();

  resizeHandlersComponent: ComponentRef<ResizeHandlersComponent>;

  constructor(private el: ElementRef,
              private container: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.addHandlersToElement();
  }

  addHandlersToElement() {
    const component = this.componentFactoryResolver.resolveComponentFactory(ResizeHandlersComponent);
    this.resizeHandlersComponent = this.container.createComponent(component);
    this.resizeHandlersComponent.instance.parentElement = this.el;
    this.resizeHandlersComponent.instance.rotate = this.rotate;
    this.resizeHandlersComponent.instance.selected = false;
    this.el.nativeElement.appendChild(this.resizeHandlersComponent.location.nativeElement);
  }

  @HostListener('mousedown') onMouseDown() {
    this.resizeHandlersComponent.instance.rotate = this.rotate;
    this.resizeHandlersComponent.instance.selected = true;
  }

  @HostListener('mouseupn') onMouseUp() {
    this.stopped.emit();
  }

  @HostListener('window:mouseup', ['$event.target']) onWindowMouseUp(targetEvent) {
    if (!this.el.nativeElement.contains(targetEvent)) {
      this.resizeHandlersComponent.instance.selected = false;
    }
  }
}
