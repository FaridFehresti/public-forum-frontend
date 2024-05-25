import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routes';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthComponent } from './auth.component'; 
import { RegisterFormComponent } from './register-form/register-form.component';
import { RessetPasswordFormComponent } from './resset-password-form/resset-password-form.component';

const MAT = [
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  ReactiveFormsModule
];

const PAGES = [
  LoginFormComponent,
  AuthComponent ,
  RegisterFormComponent,RessetPasswordFormComponent
];

@NgModule({
  declarations: [...PAGES],
  imports: [
    ...MAT,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
