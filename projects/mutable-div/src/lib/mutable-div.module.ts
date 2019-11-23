import { NgModule } from '@angular/core';
import { DraggableElementDirective } from './draggable-element.directive';
import { ResizableElementDirective } from './resizable-element.directive';
import { ResizeHandlersComponent } from './resize-handlers/resize-handlers.component';



@NgModule({
  declarations: [
    DraggableElementDirective,
    ResizableElementDirective,
    ResizeHandlersComponent
  ],
  imports: [],
  entryComponents: [ResizeHandlersComponent],
  exports: [
    DraggableElementDirective,
    ResizableElementDirective,
  ]
})
export class MutableDivModule { }
