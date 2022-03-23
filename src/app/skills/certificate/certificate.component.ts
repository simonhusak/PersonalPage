import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  desc: string;
  @Input()
  date: string;
  @Input()
  imageUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
