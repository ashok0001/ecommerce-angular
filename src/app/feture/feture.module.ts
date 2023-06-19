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
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { ProductReviewCardComponent } from './product-details/product-review-card/product-review-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BarRatingModule } from 'ngx-bar-rating';
// import {Ngtemp}

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    FetureComponent,
    MainCarouselComponent,
    ProductCardSliderComponent,
    SliderProductCardComponent,
    ProductReviewCardComponent,
  ],
  imports: [
    CommonModule,
    FetureRoutingModule,
    SharedModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatProgressBarModule,
    BarRatingModule
  ],
  exports: [FetureComponent],
})
export class FetureModule {}
