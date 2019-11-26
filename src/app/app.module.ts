import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MutableDivModule } from 'mutable-div';

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
