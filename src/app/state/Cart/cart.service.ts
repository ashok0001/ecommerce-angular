import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}
  API_BASE_URL="http://localhost:5454"
  
  addItemToCart(reqData: any): Observable<any> {
    const url = `${this.API_BASE_URL}/api/cart/add`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      'Content-Type': 'application/json',
    });

    return this.http.put(url, reqData, { headers }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getCart(): Observable<any> {
    const url = `${this.API_BASE_URL}/api/cart/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      'Content-Type': 'application/json',
    });

    return this.http.get(url, { headers }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  removeCartItem(reqData: any): Observable<any> {
    const url = `${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      'Content-Type': 'application/json',
    });

    return this.http.delete(url, { headers }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  updateCartItem(reqData: any): Observable<any> {
    const url = `${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      'Content-Type': 'application/json',
    });

    return this.http.put(url, reqData.data, { headers }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
