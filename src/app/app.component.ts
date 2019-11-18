import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mutable-div-library';

  rotate = 0;

  rotateClockwise() {
    this.rotate = this.rotate + 90;
    if (this.rotate === 360) {
      this.rotate = 0
    }
  }

  rotateAntiClockwise() {
    if (this.rotate <= 0) {
      this.rotate = 360
    }
    this.rotate = this.rotate - 90;
  }
}
