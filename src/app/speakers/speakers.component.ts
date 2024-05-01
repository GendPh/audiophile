import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { AudioGearTextComponent } from '../audio-gear-text/audio-gear-text.component';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { Product } from '../../Model/product.model';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule, RouterLink, CategoryComponent, AudioGearTextComponent, CategoryItemComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  speakers: Product[] = [];
  speakerNew: Product;

  constructor(private productService: ProductService) {
    this.speakers = productService.GetSpeakers();
    this.speakerNew = this.speakers.find((speaker) => speaker.newProduct);;
    const newIndex = this.speakers.indexOf(this.speakerNew);
    if (newIndex == -1) return;
    this.speakers.splice(newIndex, 1);
    console.log(this.speakers);
  }
}
