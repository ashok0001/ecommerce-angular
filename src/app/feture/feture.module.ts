import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetureRoutingModule } from './feture-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FetureComponent } from './feture.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    FetureComponent
  ],
  imports: [
    CommonModule,
    FetureRoutingModule,
    SharedModule
  ],
  exports:[
    FetureComponent
  ]
})
export class FetureModule { }
