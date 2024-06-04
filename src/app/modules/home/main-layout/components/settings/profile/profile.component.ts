import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthOperationService } from 'src/app/modules/auth/services/auth-operation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor( private authOp: AuthOperationService, private router: Router) {

  }
  onLogOut(): void {
    this.authOp.logOut()
    this.router.navigate(['/auth/login']);
    
  }
}
