import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';



const MAT = [

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
  ],
  providers:[
  ]
})
export class HomeModule { }
