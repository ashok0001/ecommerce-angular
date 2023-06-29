import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartService } from './cart.service';
import { addItemToCartFailure, addItemToCartRequest, addItemToCartSuccess, getCartFailure, getCartRequest, getCartSuccess, removeCartItemFailure, removeCartItemRequest, removeCartItemSuccess, updateCartItemFailure, updateCartItemRequest, updateCartItemSuccess } from './cart.actions';
// import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItemToCartRequest),
    
      mergeMap(({reqData}) =>
       {
            console.log("reqData --- ",reqData)
            return this.cartService.addItemToCart(reqData).pipe(
                map((data) => {
                    console.log("data - ",data)
                    return addItemToCartSuccess({ payload: data })}),
                catchError((error) =>
                    of(addItemToCartFailure({ error }))
                )
            )
        }
      )
    )
  );

  getCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCartRequest),
      mergeMap((action) =>
        this.cartService.getCart().pipe(
          map((data) =>{
            console.log("response cart ",data)
            return getCartSuccess({ payload: data })}),
          catchError((error) => of(getCartFailure({ error })))
        )
      )
    )
  );

  removeCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeCartItemRequest),
      mergeMap((action) =>
        this.cartService.removeCartItem(action.reqData).pipe(
          map(() => removeCartItemSuccess({ cartItemId: action.reqData.cartItemId })),
          catchError((error) => of(removeCartItemFailure({ error })))
        )
      )
    )
  );

  updateCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCartItemRequest),
      mergeMap((action) =>
        this.cartService.updateCartItem(action.reqData).pipe(
          map((data) => {
            console.log("data - ",data)
            return updateCartItemSuccess({ payload: data })}),
          catchError((error) => of(updateCartItemFailure({ error })))
        )
      )
    )
  );
}
