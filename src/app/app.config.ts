import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ProductService } from '../Service/product.service';
import { CartService } from '../Service/cart.service';
import { ClientService } from '../Service/client.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), ProductService, CartService, ClientService],
};
