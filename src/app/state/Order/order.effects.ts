// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { OrderService } from './order.service';
// import * as OrderActions from './Actions';

// @Injectable()
// export class OrderEffects {
//   createOrder$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(OrderActions.createOrderRequest),
//       switchMap((action) =>
//         this.orderService.createOrder(action.reqData).pipe(
//           map((order) => {
//             console.log("order - ",order)
//             return OrderActions.createOrderSuccess({ order })}),
//           catchError((error) => of(OrderActions.createOrderFailure({ error })))
//         )
//       )
//     )
//   );

//   getOrderById$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(OrderActions.getOrderByIdRequest),
//       switchMap((action) =>
//         this.orderService.getOrderById(action.orderId).pipe(
//           map((order) => {
//             console.log("order by id - ",order)
//             return OrderActions.getOrderByIdSuccess({ order })}),
//           catchError((error) => of(OrderActions.getOrderByIdFailure({ error })))
//         )
//       )
//     )
//   );

//   getOrderHistory$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(OrderActions.getOrderHistoryRequest),
//       switchMap((action) =>
//         this.orderService.getOrderHistory(action.reqData).pipe(
//           map((orders) => {
//             console.log("order history - ",orders)
//             return OrderActions.getOrderHistorySuccess({ orders })}),
//           catchError((error) => of(OrderActions.getOrderHistoryFailure({ error })))
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private orderService: OrderService) {}
// }
