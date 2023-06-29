import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { getCartRequest } from 'src/app/state/Cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products=[1,1,1,1,,1]
  cart$!:Observable<any>

  constructor(private router:Router,private store:Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(getCartRequest())
    this.cart$=this.store.select(store=>store.cart)
    
    this.cart$.subscribe(cart=>console.log("cart from store - ",cart))
  }

  navigateToCheckout=()=>{
    this.router.navigate(["checkout"])
  }
}
