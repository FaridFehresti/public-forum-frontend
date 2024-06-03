import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmPopUpAnimation, ConfirmPopUpComponent } from 'src/app/shared/components/confirm-popup/confirm-popup.component';



const MAT = [
  MatButtonModule
];

const PAGES = [
    
];
const COMPONENTS = [
    HomeComponent,
    
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    HomeRoutingModule,
    ConfirmPopUpAnimation,
    ConfirmPopUpComponent,
    
    ...MAT,
  ],
  providers:[
  ]
})
export class HomeModule { }
