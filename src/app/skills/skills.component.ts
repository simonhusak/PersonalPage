import { Component, OnInit } from '@angular/core';
import { ProgressBarType } from './progress-bar/ProgressBarType';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  public types = ProgressBarType;
  constructor() { }

  ngOnInit(): void {
  }

}
