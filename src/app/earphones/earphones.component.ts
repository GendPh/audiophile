import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AudioGearTextComponent } from '../audio-gear-text/audio-gear-text.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { Product } from '../../Model/product.model';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-earphones',
  standalone: true,
  imports: [CommonModule, RouterLink, AudioGearTextComponent, CategoryComponent, CategoryItemComponent],
  templateUrl: './earphones.component.html',
  styleUrl: './earphones.component.css'
})
export class EarphonesComponent {
  earphones: Product[] = [];
  earphoneNew: Product;
  constructor(private productService: ProductService) {
    this.earphones = productService.GetEarphones();
    this.earphoneNew = this.earphones.find((headphone) => headphone.newProduct);;
    const newIndex = this.earphones.indexOf(this.earphoneNew);
    if (newIndex == -1) return;
    this.earphones.splice(newIndex, 1);
  }
}
