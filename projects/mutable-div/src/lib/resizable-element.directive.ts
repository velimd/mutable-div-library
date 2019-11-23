import {ComponentFactoryResolver, Directive, ElementRef, OnInit, ViewContainerRef} from '@angular/core';
import {ResizeHandlersComponent} from './resize-handlers/resize-handlers.component';

@Directive({
  selector: '[resizable]'
})
export class ResizableElementDirective implements OnInit {

  constructor(private el: ElementRef,
              private container: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.addHandlersToElement();
  }

  addHandlersToElement() {
    const component = this.componentFactoryResolver.resolveComponentFactory(ResizeHandlersComponent);
    const resizeHandlersComponent = this.container.createComponent(component);
    resizeHandlersComponent.instance.height = this.el.nativeElement.height;
    resizeHandlersComponent.instance.width = this.el.nativeElement.width;
    this.el.nativeElement.appendChild(resizeHandlersComponent.location.nativeElement);
  }
}
