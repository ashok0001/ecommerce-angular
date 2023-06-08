import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FetureModule } from './feture/feture.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FetureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
