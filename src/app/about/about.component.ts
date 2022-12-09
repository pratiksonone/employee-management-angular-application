import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  customers = [
    'grameenphone',
    'jio',
    'vodafone',
    'kyivstar',
    'dhiraagu',
    'sify',
    'reliancedigital',
    'reliancefresh',
    'wipro',
    'aircel',
    'docomo',
    'azuga',
    'qualcomm',
    'motorola',
    'polaris',
    'nokia',
    'adiyabirla',
  ];
  constructor() {}

  ngOnInit(): void {}
}
