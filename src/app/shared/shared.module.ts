import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
