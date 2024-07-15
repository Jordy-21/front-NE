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
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  private urlEndPoint: string = 'http://localhost:8080/api/pagos';
  private http: HttpClient = inject(HttpClient);
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  authService = inject(AuthService);

  pagar(monto: string, fecha: string): Observable<any> {
    const body = {monto, fecha}
    const token = this.authService.getAccessToken();
    this.httpHeaders = this.httpHeaders.set('Authorization', `Bearer ${token}`);

    return this.http.post(this.urlEndPoint, body , { headers: this.httpHeaders }).pipe(
      catchError((e) => {
        console.log(e.error);
        return throwError(() => e);
      })
    );
  }
}
