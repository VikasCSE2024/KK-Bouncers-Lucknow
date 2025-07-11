import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeGalleryImages = [
    { src: 'assets/images/bouncer1.jpeg', alt: 'Bouncer 1' },
    { src: 'assets/images/bouncer2.jpeg', alt: 'Bouncer 2' },
    { src: 'assets/images/bouncer3.jpeg', alt: 'Bouncer 3' },
    { src: 'assets/images/bouncer4.jpeg', alt: 'Bouncer 4' },
    { src: 'assets/images/bouncer5.jpeg', alt: 'Bouncer 5' },
    { src: 'assets/images/bouncer6.jpeg', alt: 'Bouncer 6' },
    { src: 'assets/images/bouncer7.jpeg', alt: 'Bouncer 7' },
    { src: 'assets/images/bouncer8.jpeg', alt: 'Bouncer 8' },
    { src: 'assets/images/bouncer9.jpeg', alt: 'Bouncer 9' },
    { src: 'assets/images/bouncer10.jpeg', alt: 'Bouncer 10' },
    { src: 'assets/images/bouncer11.jpeg', alt: 'Bouncer 11' },
    { src: 'assets/images/bouncer12.jpeg', alt: 'Bouncer 12' }
  ];
}
