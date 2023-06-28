import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from 'src/app/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5454/api/users/profile';

  constructor(private http: HttpClient) {}

  

  getUserProfile(): Observable<User | null> {
    const headers = new HttpHeaders()
    .set("Authorization",`Bearer ${localStorage.getItem("jwt")}`)
    // { Authorization:  };

    return this.http.get<User>(this.apiUrl, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error getting user profile', error);
        return of(null);
      })
    );
  }





  logout(): void {
    localStorage.removeItem('jwt');
  }
}
