import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  
  @Input()
  birthdate: string;
  age: Number;

  constructor() {  }

  ngOnInit(): void {
    let parsedDate = moment(this.birthdate,"DD-MM-YYYY");
    this.age = Math.floor(Math.abs(Date.now() - parsedDate.toDate().getTime())/1000/3600/24/365);
  }

}
