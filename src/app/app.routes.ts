import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';


export const routes: Routes = [
  { "path": "", "title": "Home", component: HomeComponent },
  { "path": "checkout", "title": "Checkout", component: CheckoutComponent },
  { "path": "earphones", "title": "Earphones", component: EarphonesComponent },
  { "path": "headphones", "title": "Headphones", component: HeadphonesComponent },
  { "path": "speakers", "title": "Speakers", component: SpeakersComponent },
  { "path": "products/:name", "title": "Products", component: ProductComponent },
  { "path": "**", "title": "404", component: NotFoundComponent },
];
