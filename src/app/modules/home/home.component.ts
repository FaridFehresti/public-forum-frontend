import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthOperationService } from '../auth/services/auth-operation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpAnimation } from 'src/app/shared/components/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  userSub:Subscription | null = null
  data:any
  constructor(private router:Router,private authOp: AuthOperationService) {
  }
  onClick(){
    this.userSub = this.authOp.getUsers().subscribe({
      next: res => {
        console.log(res);
        this.data = res
      },
      error: err => {
        console.log(err);
      },
    })
  }
 
  ngOnInit(): void {
    console.log("im here")
    this.onClick()
  }

  onLogOut(): void {
    this.authOp.logOut()
    this.router.navigate(['/auth/login']);
    
  }
  
}
