import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MutableDivModule } from 'mutable-div';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MutableDivModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
