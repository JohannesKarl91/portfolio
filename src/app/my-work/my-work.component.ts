import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
