import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CarroService } from '../../services/carro.service';
import { PagoService } from '../../services/pago.service';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css',
})
export class PagoComponent {
  total!: number;
  register!: FormGroup;
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);;
  private carroService = inject(CarroService);
  private pagoService = inject(PagoService);

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      tarjeta: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      monto: ['', Validators.required],
    });
    console.log(this.carroService.getTotal());
    const totalFromCarroService = this.carroService.getTotal();
    this.register.get('monto')?.setValue(totalFromCarroService);
  }

  onSubmit() {
    if (this.register.valid) {
      this.pagoService
        .pagar(this.register.value.monto, this.onFechaChange())
        .subscribe((response) => {
          console.log(response)
          this.router.navigate(['/home']);
        });
    }
  }

  onFechaChange() {
    // La fecha seleccionada es un objeto Date
    const fecha = new Date();

    // Formatear la fecha como "yyyy-MM-dd"
    const year = fecha.getFullYear();
    const month = this.padLeft(fecha.getMonth() + 1, 2);
    const day = this.padLeft(fecha.getDate(), 2);

    return `${year}-${month}-${day}`;
  }

  padLeft(value: number, width: number): string {
    return value.toString().padStart(width, '0');
  }
}
