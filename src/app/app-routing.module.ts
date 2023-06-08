import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './feture/products/products.component';
import { CartComponent } from './feture/cart/cart.component';
import { ProductDetailsComponent } from './feture/product-details/product-details.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'product-details',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
