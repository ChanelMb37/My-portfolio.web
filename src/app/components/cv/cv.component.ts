// cv.component.ts

// Importation des modules nécessaires
import { Component } from '@angular/core'; // Permet de créer un composant Angular
import { DomSanitizer } from '@angular/platform-browser'; // Utilisé pour sécuriser l'URL du fichier PDF
import { HttpClient } from '@angular/common/http'; // Permet de faire des requêtes HTTP

@Component({
  selector: 'app-cv', // Nom du composant utilisé dans le HTML
  templateUrl: './cv.component.html', // Chemin vers le fichier HTML lié
  styleUrls: ['./cv.component.scss'] // Chemin vers le fichier SCSS lié
})
export class CvComponent {
  isPreviewVisible = false; // Contrôle l'affichage ou non de la prévisualisation du CV
  pdfSrc = 'assets/documents/cv.pdf'; // Chemin relatif vers le fichier PDF

  // Injection de services dans le constructeur
  constructor(
    private sanitizer: DomSanitizer, // Pour sécuriser l'URL du PDF à afficher
    private http: HttpClient // Pour télécharger le PDF via HTTP
  ) {}

  // Fonction qui permet d'afficher/masquer le CV
  toggleView() {
    this.isPreviewVisible = !this.isPreviewVisible; // Bascule l'état d'affichage
  }

  // Fonction asynchrone pour télécharger le CV
  async downloadCV() {
    try {
      // Téléchargement du fichier PDF en tant que blob
      const pdf = await this.http.get(this.pdfSrc, { responseType: 'blob' }).toPromise();

      // Création d'un blob à partir du fichier reçu
      const blob = new Blob([pdf!], { type: 'application/pdf' });

      // Création d'un lien <a> pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob); // Génère un lien temporaire
      link.download = 'cv.pdf'; // Nom du fichier lors du téléchargement
      link.click(); // Simule un clic sur le lien
    } catch (error) {
      // En cas d'erreur, afficher un message dans la console et une alerte
      console.error('Erreur de téléchargement:', error);
      alert('Impossible de télécharger le CV');
    }
  }

  // Getter sécurisé de l'URL du PDF pour affichage dans une balise HTML (iframe, embed, etc.)
  get safePdfSrc() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc); // Sécurise l'URL avant de l'afficher
  }
}
