import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  private imagePaths = [
    '/assets/images/loading/camera.svg',
    '/assets/images/loading/star.svg',
    '/assets/images/loading/headphone.svg',
  ];
  private selectedIndex = 0;

  loadingPercent = 0;

  get style() {
    return {
      'background-image': `url(${this.imagePaths[this.selectedIndex]})`
    };
  }
  ngOnInit() {
    setInterval(
      () => this.selectedIndex = (this.selectedIndex + 1) % this.imagePaths.length,
      500
      );
    const timerId = setInterval(
      () => {
        const value = this.loadingPercent + Math.round(Math.random() * 25);
        if (value >= 100) {
          this.loadingPercent = 100;
          clearInterval(timerId);
        } else {
          this.loadingPercent = value;
        }
      },
      500
    );
  }


}
