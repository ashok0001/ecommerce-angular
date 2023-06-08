import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
