import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputFieldComponent } from '../input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Service/cart.service';
import { ProductCart } from '../../Model/product.model';
import { ClientService } from '../../Service/client.service';
import { Client } from '../../Model/client.model';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, InputFieldComponent, CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  finishCheckout: boolean;

  paymentMethod: string;
  eMoneyContainer: boolean = true;

  cart: ProductCart[];
  cartCopy: ProductCart[];
  cartTotal: number[];
  cartTotalCopy: number;
  shippingTotal: number;
  cartVAT: number[];
  cartVATCopy: number;

  client: Client;

  constructor(private cartService: CartService, private clientService: ClientService) {
    this.finishCheckout = false;
    this.cart = cartService.cartList;
    this.cartTotal = cartService.cartTotal;
    this.shippingTotal = cartService.cartShipping;
    this.cartVAT = cartService.cartVAT;
    this.paymentMethod = 'e-money';
    this.clientService.ConstructClient('paymentMethod', this.paymentMethod);
    this.client = clientService.client;

  }

  SetPaymentMethod(method: string) {
    this.paymentMethod = method;
    this.eMoneyContainer = (method === 'e-money') ? true : false;
    if (this.eMoneyContainer) {
      this.clientService.ConstructClient('paymentMethod', 'e-money');
    } else {
      this.clientService.ConstructClient('paymentMethod', 'delivery');
    }
  }

  FinalCheckout() {
    const keys = Object.keys(this.client);
    let isValid = true;
    if (this.cart.length > 0) {
      for (const key of keys) {
        if (key !== 'eMoneyNumber' && key !== 'eMoneyPin') {
          if (!this.client[key]) {
            isValid = false;
            break;
          }
        } else {
          if (this.client['paymentMethod'] !== 'delivery' && !this.client[key]) {
            isValid = false;
            break;
          }
        }
      }

      if (!isValid) {
        this.finishCheckout = true;
        this.cartCopy = [...this.cart];
        this.cartTotalCopy = this.cartTotal[0];
        this.cartVATCopy = this.cartVAT[0];
        window.scrollTo(0, 0);
        this.cartService.RemoveAll();
      }
    }
  }

  ResetFinishContainer() {
    this.finishCheckout = false;
  }
}
