import {AfterViewInit, ComponentFactoryResolver, Directive, ElementRef, OnInit, ViewContainerRef} from '@angular/core';
import {ResizeHandlersComponent} from './resize-handlers/resize-handlers.component';

@Directive({
  selector: '[resizable]'
})
export class ResizableElementDirective implements AfterViewInit {

  constructor(private el: ElementRef,
              private container: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.addHandlersToElement();
  }

  addHandlersToElement() {
    const component = this.componentFactoryResolver.resolveComponentFactory(ResizeHandlersComponent);
    const resizeHandlersComponent = this.container.createComponent(component);
    resizeHandlersComponent.instance.parentElement = this.el;
    this.el.nativeElement.appendChild(resizeHandlersComponent.location.nativeElement);
  }
}
