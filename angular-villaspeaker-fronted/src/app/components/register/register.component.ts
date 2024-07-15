import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
      direccion: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.register.valid) {
      const registerData = this.register.value;
      this.authService.register(registerData).subscribe((response) => {
        this.authService.setToken(response.token)
        this.router.navigate(['/home']);
      });
    }
  }
}
