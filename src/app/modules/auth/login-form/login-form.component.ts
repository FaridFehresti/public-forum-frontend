import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import {  FormBuilder, Validators } from '@angular/forms';
import { AuthOperationService } from '../auth-operation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent  implements OnInit,OnDestroy{
  loginSub:Subscription | null = null;
  hide:boolean =true
  loginForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required],
  });
  constructor(private authOp:AuthOperationService, private fb:FormBuilder) {


  }
  ngOnInit(): void {
    
  }
  

  onSubmit(): void {
    if (this.loginForm.valid) {
      let data = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,

      }
      this.loginSub = this.authOp.loginUser(data).subscribe(res => {
        console.log(res)
      })
    }
  }
  updateErrorMessage(controlName:string):void{
    if(this.loginForm.get(controlName)?.hasError('email')){
      this.loginForm.get(controlName)?.setErrors({'email':true})
    }
  }
  onShowPasswordClick(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  ngOnDestroy(): void {
    this.loginSub?.unsubscribe()
  }
}
