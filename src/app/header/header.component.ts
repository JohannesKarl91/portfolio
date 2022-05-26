import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addReponsiveMenu() {
    let reponsiveMenu = document.getElementById('headerResponsiveMenu');
    reponsiveMenu.classList.remove('d-none');
    let reponsiveMenuClose = document.getElementById('headerResponsiveMenuClose');
    reponsiveMenuClose.classList.remove('d-none');
    let reponsiveMenuOpen = document.getElementById('headerResponsiveMenuOpen')
    reponsiveMenuOpen.style.cssText = 'display: none';
  }

  hideReponsiveMenu() {
    let reponsiveMenu = document.getElementById('headerResponsiveMenu');
    reponsiveMenu.classList.add('d-none');
    let reponsiveMenuClose = document.getElementById('headerResponsiveMenuClose');
    reponsiveMenuClose.classList.add('d-none');
      let reponsiveMenuOpen = document.getElementById('headerResponsiveMenuOpen')
      reponsiveMenuOpen.style.cssText = 'display: block';
  }
}
