import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetureRoutingModule } from './feture-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FetureRoutingModule
  ]
})
export class FetureModule { }
