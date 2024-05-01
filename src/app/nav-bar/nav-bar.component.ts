import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ShopContainerComponent } from '../shop-container/shop-container.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, CategoryComponent, ShopContainerComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showMenu: boolean = false;
  showCart: boolean = false;

  ReloadPage() {
    const bodyElement = document.querySelector('body');

    this.showMenu = false;
    this.showCart = false;
    if (this.showMenu || this.showCart) {
      bodyElement.classList.add('overflow-hidden', 'pointer-events-none');
    } else {
      bodyElement.classList.remove('overflow-hidden', 'pointer-events-none');
    }
  }
  CloseShopBar() {
    this.ReloadPage();
  }

  ActiveMenu() {
    const bodyElement = document.querySelector('body');
    if (this.showCart) {
      this.showCart = false;
    }

    this.showMenu = !this.showMenu;

    if (this.showMenu || this.showCart) {
      bodyElement.classList.add('overflow-hidden', 'pointer-events-none');
    } else {
      bodyElement.classList.remove('overflow-hidden', 'pointer-events-none');
    }
  }
  ActiveCart() {
    const bodyElement = document.querySelector('body');
    if (this.showMenu) {
      this.showMenu = false
    }

    this.showCart = !this.showCart;

    if (this.showMenu || this.showCart) {
      bodyElement.classList.add('overflow-hidden', 'pointer-events-none');
    } else {
      bodyElement.classList.remove('overflow-hidden', 'pointer-events-none');
    }
  }
}
