import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('block', {static: false}) block: ElementRef;

  rectangle = {
    x: 20,
    y: 180,
    height: 150,
    width: 100
  };
  rotation = 0;
  zoom = 1;
  selected = false;

  constructor() {
  }

  rotate90() {
    this.rotation = (this.rotation + 90) %360;
  }

  rotateC90() {
    this.rotation = (this.rotation + 270) %360;
  }

  stepZoom(value: number) {
    this.zoom += value;
  }

  onStopped() {
    console.log('stopped');
  }
}
