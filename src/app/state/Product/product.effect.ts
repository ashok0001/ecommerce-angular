import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  findProductsByCategoryRequest,
  findProductsByCategorySuccess,
  findProductsByCategoryFailure,
  findProductByIdRequest,
  findProductByIdSuccess,
  findProductByIdFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
} from './Actions';
import { ProductService } from './product.service';

@Injectable()
export class ProductEffects {
  findProductsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findProductsByCategoryRequest),
      mergeMap(({ reqData }) =>
        this.productService.findProductsByCategory(reqData).pipe(
          map((response) => {
            console.log("product response -: ", response)
            return findProductsByCategorySuccess({ payload: response })}),
          catchError((error) => of(findProductsByCategoryFailure({ error })))
        )
      )
    )
  );

  findProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findProductByIdRequest),
      mergeMap(({ productId }) =>
        this.productService.findProductById(productId).pipe(
          map((response) => findProductByIdSuccess({ payload: response })),
          catchError((error) => of(findProductByIdFailure({ error })))
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProductRequest),
      mergeMap(({ product }) =>
        this.productService.createProduct(product).pipe(
          map((response) => createProductSuccess({ payload: response })),
          catchError((error) => of(createProductFailure({ error })))
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProductRequest),
      mergeMap(({ product }) =>
        this.productService.updateProduct(product).pipe(
          map((response) => updateProductSuccess({ payload: response })),
          catchError((error) => of(updateProductFailure({ error })))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProductRequest),
      mergeMap(({ productId }) =>
        this.productService.deleteProduct(productId).pipe(
          map((response) => deleteProductSuccess({ payload: response })),
          catchError((error) => of(deleteProductFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
