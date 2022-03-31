import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarType } from './ProgressBarType';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  progress: number;
  @Input()
  margintop: number = 3;
  @Input() 
  type: number;
  @Input()
  years: number;

  constructor() { }

  ngOnInit(): void {
  }

}
