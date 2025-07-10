import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSubmitting = false;
  
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  onSubmit() {
    if (this.validateForm()) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.formData);
        alert('Thank you for your message! We will get back to you soon.');
        this.resetForm();
        this.isSubmitting = false;
      }, 2000);
    }
  }

  validateForm(): boolean {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all required fields.');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    
    return true;
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    };
  }
}
