// about.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // Données de la timeline
  timeline = [
    {
      year: '2020',
      title: 'Initiation au Développement',
      description: 'Découverte autodidacte des bases du HTML/CSS/JavaScript à travers des projets personnels',
      technologies: ['HTML5', 'CSS3', 'JS']
    },
    {
      year: '2023',
      title: 'Formation Intensive Front-End',
      description: 'Spécialisation en Angular et bonnes pratiques de développement',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Firebase']
    },
    {
      year: '2024',
      title: 'Certificats OpenClassrooms',
      description: 'Obtention des certificats en développement web ',
      technologies: ['HTML/CSS', 'JavaScript', 'Angular', 'TypeScript']
    },
    // {
    //   year: '2024',
    //   title: 'Expérience Professionnelle',
    //   description: 'Développement d\'applications full-stack en entreprise',
    //   technologies: ['Node.js', 'MongoDB', 'MySQL', 'NestJS']
    // },
    {
      year: '2025',
      title: 'Spécialisation Back-End',
      description: 'Architectures microservices avec NestJS ',
      technologies: ['NestJS', 'MySql']
    }
  ];

  // Configuration du cube 3D
  cubeRotation = {
    x: 0,
    y: 0
  };

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Animation au mouvement de la souris
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cubeRotation = {
      x: (event.clientY - window.innerHeight / 2) * 0.005,
      y: (event.clientX - window.innerWidth / 2) * 0.01
    };
  }

  // Données pour le cube 3D
  cubeFaces = [
    { 
      tech: 'Angular', 
      icon: 'assets/icons/angular.svg',
      color: '#DD0031'
    },
    { 
      tech: 'NestJS', 
      icon: 'assets/icons/nestjs.svg',
      color: '#E0234E'
    },
    { 
      tech: 'Firebase', 
      icon: 'assets/icons/firebase.svg',
      color: '#FFCA28'
    },
    { 
      tech: 'TypeScript', 
      icon: 'assets/icons/typescript.svg',
      color: '#3178C6'
    }
  ];

  // Navigation vers une section
  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}