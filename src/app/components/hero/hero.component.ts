import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    // Configuration de l'effet machine à écrire
    const typed = new Typed('.typing-effect', {
      strings: ['Innovateur', 'Créatif', 'Solutionneur'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: false
    });
  }
}