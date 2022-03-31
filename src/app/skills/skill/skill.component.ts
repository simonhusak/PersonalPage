import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  desc: string;
  @Input()
  date: string;
  @Input()
  imageUrl: string;
  @Input()
  url: string;
  @Input()
  location: string;
  constructor() { }

  ngOnInit(): void {
  }

}
