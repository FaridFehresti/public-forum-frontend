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
import {MatGridListModule}from '@angular/material/grid-list'
import {MatDatepickerModule}from '@angular/material/datepicker'
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';


const MAT = [
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  ReactiveFormsModule,
  MatGridListModule,
  MatDatepickerModule,
  MatIconModule,
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
  ],
  providers:[
    provideNativeDateAdapter()
  ]
})
export class AuthModule { }
