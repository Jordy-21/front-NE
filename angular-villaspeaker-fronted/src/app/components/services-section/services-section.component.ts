import { Component, OnInit, inject } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CarroService } from '../../services/carro.service';
import { CarritoItem } from '../../models/item-carrito';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent implements OnInit {
  categorias!: Categoria[];
  productos!: Producto[];
  categoriaService = inject(CategoriaService);
  productoService = inject(ProductoService);
  private activatedRoute = inject(ActivatedRoute);
  private carroService = inject(CarroService);
  private authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.categoriaService
      .getCategorias()
      .subscribe((categorias) => (this.categorias = categorias));

    this.cargarProductos();
  }

  cargarProductos(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        console.log(id);
        this.productoService.getProductosById(id).subscribe((productos) => {
          this.productos = productos;
          console.log(this.productos);
        });
      }
    });
  }

  agregar(nombre: string, foto: string, precio: number, id: number) {
    this.carroService.addProduct(new CarritoItem(id, nombre, foto, precio));
  }

  validate(){
    const valid = this.authService.isAuthenticated().subscribe(
      (response) =>
      {
        if(response){
          this.router.navigate(['/carro'])
        } else {

          //mostrar alerta para dar a conocer su ingreso del usuario
          Swal.fire({
            title: "Debe Iniciar Sesion",
            text: "Hola colega! Antes de empezar debe iniciar sesion.",
            icon: "info"
          });

          this.router.navigate(['/login'])

        }
      }
    )
  }
}
