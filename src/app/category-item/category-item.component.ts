import { Component, Input } from '@angular/core';
import { Product } from '../../Model/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent {
  @Input("Product") product: Product = {} as Product;
  @Input("ProductReverse") isProductReverse: boolean = false;
}
