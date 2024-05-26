import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthOperationService } from '../auth-operation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  registerSub:Subscription | null = null;
  hide:boolean =true
  registerForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required],
    user_name:['', Validators.required],
    first_name:['', Validators.required],
    last_name:['', Validators.required],
    birthdate:[''],
    gender:['male', Validators.required]
  });
  constructor(private authOp:AuthOperationService, private fb:FormBuilder) {


  }
  ngOnInit(): void {
    
  }
  

  onSubmit(): void {
    if (this.registerForm.valid) {
      let data = {
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
        user_name: this.registerForm.value.user_name!,
        first_name: this.registerForm.value.first_name!,
        last_name: this.registerForm.value.last_name!,
        birthdate: this.registerForm.value.birthdate!,
        gender:this.registerForm.value.gender!
      }
      this.registerSub = this.authOp.RegisterUser(data).subscribe(res => {
        console.log(res)
      })
    }
  }
  updateErrorMessage(controlName:string):void{
    if(this.registerForm.get(controlName)?.hasError('email')){
      this.registerForm.get(controlName)?.setErrors({'email':true})
    }
  }
  onDateChange(event:any){
    this.registerForm.controls['birthdate'].patchValue(event.value)
  }
  onShowPasswordClick(event: MouseEvent) {
    this.hide = !this.hide;
  }
  ngOnDestroy(): void {
    this.registerSub?.unsubscribe()
  }
}
