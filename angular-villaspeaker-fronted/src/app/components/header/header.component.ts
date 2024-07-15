import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  log: boolean = false;
  cantidadEnCarrito = 0;
  categorias!: Categoria[];
  firstname: string = 'Villa';
  secondname: string = 'Speaker';

  categoriaService = inject(CategoriaService);
  authService = inject(AuthService);
  router = inject(Router)

  ngOnInit(): void {
    this.categoriaService
      .getCategorias()
      .subscribe((categorias) => (this.categorias = categorias));
      
    this.authService.isAuthenticated().subscribe((log) => {
      this.log = log;
    });

  }

  logout(){
    this.authService.logout()
  }

  validateLogin(){
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
    );

  }


}
