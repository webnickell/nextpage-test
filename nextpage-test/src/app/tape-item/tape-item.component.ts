import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tape-item',
  templateUrl: './tape-item.component.html',
  styleUrls: ['./tape-item.component.css']
})
export class TapeItemComponent implements OnInit {

  @Input() imageUrl = '';
  @Input() title = '';
  @Input() description = '';
  constructor() { }

  ngOnInit() {
  }

}
