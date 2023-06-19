import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent
  ]
})
export class SharedModule { }
