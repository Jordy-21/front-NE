import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarroComponent } from './components/carro/carro.component';
import { PagoComponent } from './components/pago/pago.component';
import { CompraComponent } from './components/compra/compra.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent},
  { path: 'services/:id', title: 'Services', component: ServicesComponent},
  { path: 'about', title: 'About', component: AboutUsComponent},
  { path: 'login', title: 'Login', component: LoginComponent},
  { path: 'register', title: 'Register', component: RegisterComponent},
  { path: 'carro', title: 'Carro', component: CarroComponent},
  { path: 'pago', title: 'Pago', component: PagoComponent},
  { path: 'compra', title: 'Compra', component: CompraComponent}
];  
