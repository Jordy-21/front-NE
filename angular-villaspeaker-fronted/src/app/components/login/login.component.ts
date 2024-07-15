import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  private router: Router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit(): void {}

  onSubmit() {
    let email = this.login.value.email;
    let password = this.login.value.password;

    if (email != null && password != null) {
      console.log(email, password)
      this.authService.login(email, password).subscribe(
        (response)=> {
          this.authService.setToken(response.token)
          this.router.navigate(['/home']).then(() => {
            window.scrollTo(0, 0);
          });
        }
      );
    }
  }

}
