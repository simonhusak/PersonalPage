import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input()
  bootstrapIcoClass: string;
  @Input()
  name: string;
  @Input()
  desc: string;
  constructor() { }

  ngOnInit(): void {
  }

}
