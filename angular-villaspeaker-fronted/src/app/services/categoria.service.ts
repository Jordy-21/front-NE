import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  private urlEndPoint: string = 'http://localhost:8080/api/categorias';
  private http: HttpClient = inject(HttpClient);

  getCategorias(): Observable<Categoria[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Categoria[]));
  }
}
