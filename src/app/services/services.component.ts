import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  servicesImages = [
    { src: 'assets/images/event.jpg', alt: 'Event Security' },
    { src: 'assets/images/personal.jpg', alt: 'Personal Security' },
    { src: 'assets/images/event.jpg', alt: 'Marriage Security' },
    { src: 'assets/images/event.jpg', alt: 'Industrial Security' },
    { src: 'assets/images/concert.jpg', alt: 'Security for Concerts' },
    { src: 'assets/images/crowd.jpg', alt: 'Crowd Management' }
  ];
}
