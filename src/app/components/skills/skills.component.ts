// skills.component.ts
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Angular',
      level: 85,
      icon: 'fab fa-angular',
      tags: ['Components', 'RxJS', 'Forms', 'Routing']
    },
    {
      name: 'TypeScript',
      level: 50,
      icon: 'fas fa-code',
      tags: ['Typage', 'Interfaces', 'Generics']
    },
    {
      name: 'JavaScript',
      level: 50,
      icon: 'fab fa-js-square',
      tags: ['ES6+', 'Async/Await', 'DOM Manipulation']
    },
    {
      name: 'HTML/CSS',
      level: 85,
      icon: 'fab fa-html5',
      tags: ['Flexbox', 'Grid', 'Animations']
    },
    {
      name: 'Bootstrap',
      level: 70,
      icon: 'fab fa-bootstrap',
      tags: ['Components', 'Utilities', 'Responsive']
    },
    
    {
      name: 'Node.js',
      level: 40,
      icon: 'fab fa-node-js',
      tags: ['Express', 'Middleware', 'API Rest']
    },
    
    {
      name: 'Firebase',
      level: 75,
      icon: 'fas fa-database',
      tags: ['Firestore', 'Auth', 'Hosting']
    },
    {
      name: 'NestJS',
      level: 30,
      icon: 'fas fa-server',
      tags: ['Controllers', 'Providers', 'Middleware']
    },
    {
      name: 'UI/UX',
      level: 30,
      icon: 'fas fa-palette',
      tags: ['Prototypage', 'Figma', 'Responsive']
    },
    {
      name: 'Git/GitHub',
      level: 50,
      icon: 'fab fa-git-alt',
      tags: ['Workflow', 'CI/CD', 'Actions']
    },

    {
      name: 'Design Graphique (Canva)',
      level: 90,
      icon: 'fab fa-canva',
      tags: ['Affiches', 'Présentations', 'Logos', 'Réseaux sociaux']
    },

    {
      name: 'Maintenance Informatique',
      level: 85,
      icon: 'fas fa-tools',
      tags: ['Dépannage', 'Réseaux', 'OS', 'Sécurité']
    },

    {
      name: 'Outils IA Français',
      level: 75,
      icon: 'fas fa-robot',
      tags: ['ChatGPT', 'Midjourney', 'Copilot', 'DALL-E']
    },
    {
      name: 'Langues',
      level: 90,
      icon: 'fas fa-language',
      tags: ['Français', 'Anglais']
    }
    

    
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}