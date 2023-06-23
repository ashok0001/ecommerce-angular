import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5454/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User | null> {
    const loginData = { username, password };
    return this.http.post<User>(`${this.apiUrl}/login`, loginData).pipe(
      catchError((error) => {
        console.error('Error logging in', error);
        return of(null);
      })
    );
  }

  register(firstName:string,lastName:string,username: string, password: string): Observable<any> {
    const registerData = { username, password };
    return this.http.post(`${this.apiUrl}/register`, registerData).pipe(
      catchError((error) => {
        console.error('Error registering', error);
        return of(null);
      })
    );
  }
}
