import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {MatDividerModule} from '@angular/material/divider';
import { AdressCardComponent } from './components/adress-card/adress-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatButtonModule } from '@angular/material/button';
import { CapitalizePipe } from '../Pips/capitalize-pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AdressCardComponent,
    OrderTrackerComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AdressCardComponent,
    OrderTrackerComponent,
  ]
})
export class SharedModule { }
