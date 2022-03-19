import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  url: string;
  @Input()
  bootstrapIcoClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
