import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  API_BASE_URL = 'http://localhost:5454';
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwt'); // Get JWT token from localStorage

    // Set headers with the JWT token
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  findProductsByCategory(reqData: {
    colors: any;
    sizes: any;
    minPrice: any;
    maxPrice: any;
    minDiscount: any;
    category: any;
    stock: any;
    sort: any;
    pageNumber: any;
    pageSize: any;
  }): Observable<any> {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;

    let params = new HttpParams()
      .set('color', colors)
      .set('size', sizes)
      .set('minPrice', minPrice)
      .set('maxPrice', maxPrice)
      .set('minDiscount', minDiscount)
      .set('category', category)
      .set('stock', stock)
      .set('sort', sort)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

      const headers = this.getHeaders();
    return this.http.get(`${this.API_BASE_URL}/api/products`, {headers, params });
  }

  findProductById(productId: any): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/api/products/id/${productId}`);
  }

  createProduct(product: { data: any }): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/api/admin/products/`, product.data);
  }

  updateProduct(product: { productId: any }): Observable<any> {
    return this.http.put(
      `${this.API_BASE_URL}/api/admin/products/${product.productId}`,
      product
    );
  }

  deleteProduct(productId: any): Observable<any> {
    return this.http.delete(`${this.API_BASE_URL}/api/admin/products/${productId}/delete`);
  }
}
