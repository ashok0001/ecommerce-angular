import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './feture/products/products.component';
import { CartComponent } from './feture/cart/cart.component';
import { ProductDetailsComponent } from './feture/product-details/product-details.component';
import { HomeComponent } from './feture/home/home.component';
import { CheckoutComponent } from './feture/checkout/checkout.component';
import { PaymentComponent } from './feture/payment/payment.component';
import { PaymentSuccessComponent } from './feture/payment-success/payment-success.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OrderComponent } from './feture/order/order.component';
import { OrderDetailsComponent } from './feture/order-details/order-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
 
  {path:'cart',component:CartComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkout/payment/:id',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: 'order-summery', component: ProductsComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:orderId', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
