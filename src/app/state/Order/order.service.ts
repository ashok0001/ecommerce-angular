import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  

  private API_BASE_URL = 'http://localhost:5454';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  createOrder(reqData: any): Observable<any> {
    console.log('req data', reqData);
    const url = `${this.API_BASE_URL}/api/orders/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });

    return this.http.post(url, reqData, { headers }).pipe(
      map((data: any) => {
        if (data.id) {
          this.router.navigate([`/checkout/payment/${data.id}`], { queryParams: { step: '3', order_id: data.id } });
        }
        console.log('created order -', data);
        return data;
      }),
      catchError((error: any) => {
        console.log('catch error:', error);
        throw (error.response && error.response.data.message) ? error.response.data.message : error.message;
      })
    );
  }

  getOrderById(orderId: string): Observable<any> {
    console.log('get order req', orderId);
    const url = `${this.API_BASE_URL}/api/orders/${orderId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });
    
    return this.http.get(url,{headers}).pipe(
      map((data: any) => {
        console.log('order by id', data);
        return data;
      }),
      catchError((error: any) => {
        console.log('catch', error);
        throw (error.response && error.response.data.message) ? error.response.data.message : error.message;
      })
    );
  }

  getOrderHistory(reqData: any): Observable<any> {
    const url = `${this.API_BASE_URL}/api/orders/user`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    });

    return this.http.get(url, { headers }).pipe(
      map((data) => {
        console.log('order history', data);
        return data;
      }),
      catchError((error: any) => {
        throw (error.response && error.response.data.message) ? error.response.data.message : error.message;
      })
    );
  }
}
