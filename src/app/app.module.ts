import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MutableDivModule } from '../../projects/mutable-div/src/lib/mutable-div.module';

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
