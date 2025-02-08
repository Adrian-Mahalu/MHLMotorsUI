import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-image-slider',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './car-image-slider.component.html',
  styleUrl: './car-image-slider.component.scss'
})
export class CarImageSliderComponent {
  images: string[] = [
    'assets/ads/Audi/AudiA5.jpg',
    'assets/ads/Audi/AudiA6.jpg',
    'assets/ads/Audi/AudiA7.jpg',
    'assets/ads/Audi/AudiA8.jpg'
  ];

  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  previousImage(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  nextImage(): void {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }
}

