import { Injectable } from '@angular/core';
import { CarritoItem } from '../models/item-carrito';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  private carrito: CarritoItem[] = [];

  constructor() {}

  getProductDetails(): CarritoItem[] {
    return this.carrito;
  }

  setProductDetails(details: CarritoItem[]): void {
    this.carrito = details;
  }

  addProduct(item: CarritoItem): void {
    const existingItem = this.carrito.find(
      (existing) => existing.id === item.id
    );

    if (existingItem) {
      existingItem.cantidad += 1;
    } else {
      item.cantidad = 1;
      this.carrito.push(item);
    }
  }

  sumarCantidad(id: number): void {
    const item = this.carrito.find((existing) => existing.id === id);

    if (item) {
      // Incrementa la cantidad
      item.cantidad += 1;
    }
  }

  restarCantidad(id: number): void {
    const itemIndex = this.carrito.findIndex((existing) => existing.id === id);

    if (itemIndex !== -1) {
      const item = this.carrito[itemIndex];

      // Resta la cantidad
      if (item.cantidad > 1) {
        item.cantidad -= 1;
      } else {
        
        this.carrito.splice(itemIndex, 1);
      }
    }
  }

  getTotal(): number {
    return this.carrito.reduce((total, item) => total + item.getImporte(), 0);
  }

  getCantidad(): any {
    this.carrito.length;
  }
}
