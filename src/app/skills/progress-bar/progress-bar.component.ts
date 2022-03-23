import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
