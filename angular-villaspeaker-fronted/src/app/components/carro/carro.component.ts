import { Component, OnInit, inject } from '@angular/core';
import { CarroService } from '../../services/carro.service';
import { CarritoItem } from '../../models/item-carrito';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PagoService } from '../../services/pago.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css',
})
export class CarroComponent implements OnInit {
  pago!: FormGroup;
  carro!: CarritoItem[];
  total: number = 0.0;
  constructor(
    private carroService: CarroService,
    private formBuilder: FormBuilder,
    private pagoService: PagoService
  ) {}

  ngOnInit(): void {
    this.cargarCarrito();
    this.getTotal();

    this.pago = this.formBuilder.group({
      numero: ['', Validators.required],
      cvv: ['', Validators.required],
      monto: ['', Validators.required]
    });

  }
  cargarCarrito() {
    this.carro = this.carroService.getProductDetails();
  }

  restarItem(id: number) {
    this.carroService.restarCantidad(id);
    this.total = this.carroService.getTotal();
  }

  sumarItem(id: number) {
    this.carroService.sumarCantidad(id);
    this.total = this.carroService.getTotal();
  }

  getTotal() {
    this.total = this.carroService.getTotal();
  }


  onSubmitPago(){
    if (this.pago.valid) {
      this.pagoService.pagar(this.pago.value.monto, this.obtenerFechaActual()).subscribe((response) => {
          console.log(response)
      });
    }
  }
  obtenerFechaActual(): string {
    const fecha = new Date();
    
    // Obtener componentes de la fecha
    const year = fecha.getFullYear();
    const month = this.padLeft(fecha.getMonth() + 1, 2); // Sumar 1 porque los meses van de 0 a 11
    const day = this.padLeft(fecha.getDate(), 2);

    // Formatear la fecha como "yyyy-MM-dd"
    const fechaFormateada = `${year}-${month}-${day}`;
    
    return fechaFormateada;
  }

  // Función para rellenar ceros a la izquierda
  padLeft(value: number, width: number): string {
    return value.toString().padStart(width, '0');
  }
}
