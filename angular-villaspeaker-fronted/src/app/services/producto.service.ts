import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Categoria } from '../models/categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlEndPoint: string = 'http://localhost:8080/api/productos';
  private http: HttpClient = inject(HttpClient);
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor() {}

  getProductosById(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlEndPoint}/${id}`).pipe(
      map((response) => response as Producto[]),
      catchError((e) => {
        console.log(e.error.msg);
        return throwError(() => e);
      })
    );
  }
}
