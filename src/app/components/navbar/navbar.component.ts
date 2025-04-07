import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isCollapsed = true;

  links = [
    { path: '/', label: 'Accueil', iconClass: 'fas fa-home' },
    { path: '/about', label: 'À propos', iconClass: 'fas fa-user' },
    { path: '/projects', label: 'Projets', iconClass: 'fas fa-briefcase' },
    { path: '/skills', label: 'Compétences', iconClass: 'fas fa-code' },
    { path: '/contact', label: 'Contact', iconClass: 'fas fa-envelope' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }

  get menuIconClass(): string {
    return this.isCollapsed ? 'fas fa-bars' : 'fas fa-times';
  }
}