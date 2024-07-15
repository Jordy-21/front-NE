import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  tap,
  throwError,
} from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/auth';
  private http: HttpClient = inject(HttpClient);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.getAccessToken() != null
  );

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { username, password };
    return this.http
      .post<any>(`${this.loginUrl}/login`, body, { headers })
      .pipe(catchError((e) => {
          console.log(e)
          return throwError(() => e);
        })
      );
  }

  register(register: {
    username: string;
    password: string;
    lastname: string;
    firstname: string;
    dni: string;
    direccion: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>(`${this.loginUrl}/register`, register, { headers })
      .pipe(catchError((e) => {
          console.log(e)
          return throwError(() => e);
        })
      );
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.isAuthenticatedSubject.next(false);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getEmailFromToken(): string | null {
    let token = this.getAccessToken();
    if (token) {
      let decode = jwtDecode(token);
      return decode.sub as string;
    }
    return null;
  }
}
