import { Component } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { Product } from '../../Model/product.model';
import { ProductService } from '../../Service/product.service';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { AudioGearTextComponent } from '../audio-gear-text/audio-gear-text.component';

@Component({
  selector: 'app-headphones',
  standalone: true,
  imports: [CommonModule, CategoryItemComponent, CategoryComponent, AudioGearTextComponent],
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent {
  headphones: Product[] = [];
  headphoneNew: Product;

  constructor(private productService: ProductService) {
    this.headphones = productService.GetHeadphones();
    this.headphoneNew = this.headphones.find((headphone) => headphone.newProduct);;
    const newIndex = this.headphones.indexOf(this.headphoneNew);
    if (newIndex == -1) return;
    this.headphones.splice(newIndex, 1);
  }
}
