import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rotation = 0;

  rotate90() {
    this.rotation = (this.rotation + 90) %360;
  }

  rotateC90() {
    this.rotation = (this.rotation + 270) %360;
  }
}
