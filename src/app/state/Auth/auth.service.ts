import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/Models/user.model';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = BASE_API_URL+'/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User | null> {
    const loginData = { email, password };
    return this.http.post<User>(`${this.apiUrl}/signin`, loginData).pipe(
      catchError((error) => {
        console.error('Error logging in', error);
        return of(null);
      })
    );
  }

  register(data:User): Observable<any> {
    const registerData = { 
      email:data.email, 
      password:data.password,
      firstName:data.firstName,
      lastName:data.lastName 
    };
    console.log("registerr data ",registerData)
    return this.http.post(`${this.apiUrl}/signup`, registerData).pipe(
      catchError((error) => {
        console.error('Error registering', error);
        return of(null);
      })
    );
  }
}
