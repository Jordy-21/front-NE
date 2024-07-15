export class CarritoItem {
    id: number;
    nombre!: string;
    precio: number;
    cantidad!: number;
    foto!: string;
  
    constructor(idProducto: number, nombre: string, foto:string, precio: number) {
      this.id = idProducto;
      this.precio = precio;
      this.foto = foto;
      this.nombre = nombre;
    }

    getImporte(): number{
        return this.cantidad * this.precio;
    }
  }
