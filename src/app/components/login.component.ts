// src/app/components/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if(localStorage.getItem('userRole')=="ROLE_ADMIN"){
              console.log("admin logged in ");
              this.router.navigate(['/adminConsole']);
            }
          else{
            console.log("user logged in ");
            this.router.navigate(['/places']);
            }

        },
        error: () => {
          alert('Login failed');
        }
      });
    }
  }
}
