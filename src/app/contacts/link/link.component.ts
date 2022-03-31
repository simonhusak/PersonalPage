import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input()
  icoClass: string;
  @Input()
  name: string;
  @Input()
  desc: string;
  @Input()
  url: string;
  constructor() { }

  ngOnInit(): void {
  }

}
