import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  selectedItem: GalleryItem | null = null;
  activeFilter = 'all';
  
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      icon: '🛒',
      color: '#667eea',
      description: 'A modern e-commerce platform with advanced features including payment processing, inventory management, and analytics dashboard.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Fitness App',
      category: 'mobile',
      icon: '💪',
      color: '#764ba2',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo']
    },
    {
      id: 3,
      title: 'Corporate Branding',
      category: 'branding',
      icon: '🏢',
      color: '#f093fb',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign']
    },
    {
      id: 4,
      title: 'Dashboard UI',
      category: 'ui',
      icon: '📊',
      color: '#4facfe',
      description: 'Modern dashboard interface with data visualization, real-time updates, and responsive design.',
      technologies: ['Figma', 'React', 'D3.js', 'TypeScript']
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'web',
      icon: '🍽️',
      color: '#43e97b',
      description: 'Responsive restaurant website with online ordering, menu management, and reservation system.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe']
    },
    {
      id: 6,
      title: 'Travel App',
      category: 'mobile',
      icon: '✈️',
      color: '#fa709a',
      description: 'Travel planning app with itinerary creation, booking integration, and location-based services.',
      technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Dart']
    },
    {
      id: 7,
      title: 'Startup Logo',
      category: 'branding',
      icon: '🚀',
      color: '#ffecd2',
      description: 'Creative logo design for a tech startup with modern aesthetics and scalability.',
      technologies: ['Adobe Illustrator', 'Procreate', 'Brand Guidelines']
    },
    {
      id: 8,
      title: 'Admin Panel',
      category: 'ui',
      icon: '⚙️',
      color: '#a8edea',
      description: 'Comprehensive admin panel with user management, analytics, and system configuration.',
      technologies: ['Angular Material', 'Node.js', 'PostgreSQL', 'JWT']
    }
  ];

  galleryImages = [
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
    { src: 'assets/images/bouncer12.jpeg', alt: 'Bouncer 12' },
  ];
  lightboxOpen = false;
  lightboxIndex = 0;

  get filteredItems(): GalleryItem[] {
    if (this.activeFilter === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.activeFilter);
  }

  filterGallery(category: string, event: Event) {
    this.activeFilter = category;
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    (event.target as HTMLElement).classList.add('active');
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }
}
