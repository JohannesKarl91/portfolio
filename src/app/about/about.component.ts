import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills = [
    {
      img: 'assets/img/javascript.png',
      text: 'JavaScript'
    },
    {
      img: 'assets/img/java script.png',
      text: 'HTML'
    },
    {
      img: 'assets/img/Group 205.png',
      text: 'CSS'
    },
    {
      img: 'assets/img/angular.png',
      text: 'Angular'
    },
    {
      img: 'assets/img/Git-Icon-1788C 2.png',
      text: 'Git'
    },
    {
      img: 'assets/img/icons8-rest-api-80 2.png',
      text: 'REST API'
    },
    {
      img: 'assets/img/icons8-database-52 2.png',
      text: 'Firebase'
    },
    {
      img: 'assets/img/Group 226.png',
      text: 'Scrum'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
