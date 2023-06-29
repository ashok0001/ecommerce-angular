import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, throwError } from 'rxjs';
import {
  createPaymentFailure,
  createPaymentRequest,
  updatePaymentFailure,
  updatePaymentRequest,
} from './Actions';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private API_BASE_URL = 'http://localhost:5454'; // Replace with your API base URL

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  createPayment(orderId: any): Observable<any> {
    console.log('create payment reqData ', orderId);
    const url = `${this.API_BASE_URL}/api/payments/${orderId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    });
    return this.http.post(url, {}, { headers }).pipe(
      map((response: any) => {
        if (response.payment_link_url) {
          window.location.href = response.payment_link_url;
        }
        return response;
      }),
      catchError((error) => {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
       
        return throwError(errorMessage);
      })
    );
  }

  updatePayment(reqData: any): Observable<any> {
    console.log('update payment reqData ', reqData);
    const url = `${this.API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${reqData.jwt}`,
    });
    return this.http.get(url, { headers }).pipe(
      catchError((error) => {
        const errorMessage = error.message;
        return throwError(errorMessage);
      })
    );
  }
}
