import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    HeaderComponent,
    CardsComponent,
    ContentComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
