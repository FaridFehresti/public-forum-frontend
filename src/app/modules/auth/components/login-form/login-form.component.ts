import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthOperationService } from '../../services/auth-operation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private readonly TOKEN_NAME = 'access_token'
  loginSub: Subscription | null = null;
  hide: boolean = true;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  
 get token(){
  return localStorage.getItem(this.TOKEN_NAME)
 }
 constructor(private authOp: AuthOperationService, private fb: FormBuilder, private authService: AuthService) { } // Inject AuthService

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const data = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      };

      this.loginSub = this.authOp.loginUser(data).subscribe({
        next: res => {
          console.log(res);
          if (res?.access_token) {
            this.authService.setToken(res.access_token); // Use AuthService to set the token
          }
        },
        error: err => {
          console.log(err);
        },
      });
    }
  }

  updateErrorMessage(controlName: string): void {
    if (this.loginForm.get(controlName)?.hasError('email')) {
      this.loginForm.get(controlName)?.setErrors({ email: true });
    }
  }

  onShowPasswordClick(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.loginSub?.unsubscribe();
  }
}
