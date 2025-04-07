// footer.component.ts
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { platform: 'GitHub', url: '#', icon: 'fab fa-github' },
    { platform: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' },
    { platform: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { platform: 'Email', url: 'mailto:kokochanelnyami37@gmail.com', icon: 'fas fa-envelope' }
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}