import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthOperationService } from './services/auth-operation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy{
  usersSub: Subscription | null = null;
  constructor(private authOp: AuthOperationService) {

  }
  getUSers(){
    this.usersSub = this.authOp.getUsers().subscribe(users => console.log(users))
  }

  ngOnDestroy(): void {
    this.usersSub?.unsubscribe()
  }
}
