import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
interface SliderItem {
  image: string;
}
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  currentIndex = 0;

  items: SliderItem[] = [
    {
      image: 'assets/pexels.jpg',
    },
    {
      image: 'assets/freepik2.jpg',
    },
    {
      image: 'assets/freepik3.jpg',
    },
    {
      image: 'assets/unsplash3.jpg',
    },
  ];

  voltar(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
  }

  avancar(): void {
    this.currentIndex =
      this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
  }
}
