import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private http: HttpClient = inject(HttpClient);
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  authService = inject(AuthService);

  getCliente(email: string): Observable<any> {
    
    const token = this.authService.getAccessToken();
    this.httpHeaders = this.httpHeaders.set('Authorization', `Bearer ${token}`);

    return this.http
      .get(`${this.urlEndPoint}2/${email}`, { headers: this.httpHeaders })
      .pipe(
        catchError((e) => {
          console.log(e.error);
          return throwError(() => e);
        })
      );
  }
}
