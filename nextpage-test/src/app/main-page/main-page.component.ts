import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  views = 100000000;
  
  ngOnInit() {
    setInterval(() => this.views += Math.round((Math.random() * 20)), 100);
  }
}
