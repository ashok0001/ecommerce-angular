import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetureRoutingModule } from './feture-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FetureComponent } from './feture.component';
import { SharedModule } from '../shared/shared.module';
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component';
import { ProductCardSliderComponent } from './home/product-card-slider/product-card-slider.component';
import { SliderProductCardComponent } from './home/slider-product-card/slider-product-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    FetureComponent,
    MainCarouselComponent,
    ProductCardSliderComponent,
    SliderProductCardComponent
  ],
  imports: [
    CommonModule,
    FetureRoutingModule,
    SharedModule,
    // MatButtonModule, MatMenuModule
  ],
  exports:[
    FetureComponent
  ]
})
export class FetureModule { }
