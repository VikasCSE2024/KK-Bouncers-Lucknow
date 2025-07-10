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
    { src: 'https://via.placeholder.com/600x400?text=Gallery+1', alt: 'Gallery Image 1' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+2', alt: 'Gallery Image 2' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+3', alt: 'Gallery Image 3' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+4', alt: 'Gallery Image 4' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+5', alt: 'Gallery Image 5' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+6', alt: 'Gallery Image 6' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+7', alt: 'Gallery Image 7' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+8', alt: 'Gallery Image 8' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+9', alt: 'Gallery Image 9' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+10', alt: 'Gallery Image 10' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+11', alt: 'Gallery Image 11' },
    { src: 'https://via.placeholder.com/600x400?text=Gallery+12', alt: 'Gallery Image 12' }
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
