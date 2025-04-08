import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccess = false;

  // Liste des liens sociaux avec leurs icônes
  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/your-profile', icon: 'fab fa-linkedin' },
    // { name: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' },
    { name: 'TikTok', url: 'https://tiktok.com/@your-profile', icon: 'fab fa-tiktok' },
    { platform: 'GitHub', url: 'https://github.com/ChanelMb37', icon: 'fab fa-github' },
    { platform: 'Twitter', url: 'https://twitter.com/your-profile', icon: 'fab fa-twitter' },
    { name: 'OpenClassrooms', url: 'https://openclassrooms.com', icon: 'fas fa-graduation-cap' }, 
    // { platform: 'Dev.to', url: 'https://dev.to/your-profile', icon: 'fab fa-dev' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    emailjs.init(environment.emailjs.publicKey);
  }

  private initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.contactForm.value.name,
          reply_to: this.contactForm.value.email,
          message: this.contactForm.value.message,
          to_email: 'kokochanelnyami37@gmail.com'
        }
      );

      this.showSuccess = true;
      this.contactForm.reset();
      alert('Message envoyé avec succès'); // Message dans les logs lorsque l'envoi réussit
      setTimeout(() => this.showSuccess = false, 1000);
    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      alert('Une erreur est survenue lors de l\'envoi du message');
    } finally {
      this.isSubmitting = false;
    }
  }

  get f() { return this.contactForm.controls; }
}
