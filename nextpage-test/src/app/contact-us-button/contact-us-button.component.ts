import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us-button',
  templateUrl: './contact-us-button.component.html',
  styleUrls: ['./contact-us-button.component.css']
})
export class ContactUsButtonComponent implements OnInit {
  @Input() set isDarkTheme(val: boolean) {
    if (val) {

    } else {

    }
  }
  constructor() { }

  ngOnInit() {
  }

}
