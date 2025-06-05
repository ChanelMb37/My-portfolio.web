import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedTech: string = 'Tout';
  technologies: string[] = ['Tout', 'Angular', 'Ionic', 'Firebase', 'NestJS', 'TypeScript'];
  
  projects = [
    {
      title: 'Portfolio Personnel',
      description: 'Création de ce portfolio moderne avec animations avancées',
      technologies: ['Angular', 'SCSS', 'EmailJS', 'TypeScript', 'AOS', 'fontawesome', 'Bootstrap', 'Vanta.js', 'ng2-pdf-viewer', 'pdfjs-dist', 'three.js'],
      image: 'assets/images/Capture2.PNG',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Application de Gestion',
      description: 'Système de gestion de tâches en temps réel',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'assets/images/Capture3.PNG',
      demoUrl: 'https://github.com/ChanelMb37/ToDoApp2',
      codeUrl: 'https://github.com/ChanelMb37/ToDoApp2'
    },
    {
      title: 'Application de Gestion',
      description: 'Système de gestion des pokemons: maitriser les opérations CRUD',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'assets/images/Capture4.PNG',
      demoUrl: 'https://pokemon-app-10c04.web.app/pokemons',
      codeUrl: 'https://pokemon-app-10c04.web.app/pokemons'
    },
    {
      title: 'Application de Gestion',
      description: 'Système de gestion  des bénévoles ',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'assets/images/Capture.PNG',
      demoUrl: 'https://engagebenevole.web.app',
      codeUrl: 'https://engagebenevole.web.app'
    },
    {
      title: 'API REST',
      description: 'Développement backend avec NestJS et MySql',
      technologies: ['NestJS', 'MongoDB', 'TypeScript'],
      image: 'assets/images/nest.PNG',
      demoUrl: 'https://github.com/ChanelMb37/ApiNestJs',
      codeUrl: 'https://github.com/ChanelMb37/ApiNestJs'
    }
  ];

  filteredProjects = this.projects;

  ngOnInit(): void {
    // Initialiser AOS
  }

  filterProjects(tech: string): void {
    this.selectedTech = tech;
    this.filteredProjects = tech === 'Tout' 
      ? this.projects 
      : this.projects.filter(p => p.technologies.includes(tech));
  }

  toggleHover(project: any): void {
    // Ajouter des effets supplémentaires si besoin
  }
}