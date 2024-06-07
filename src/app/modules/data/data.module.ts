import { NgModule } from '@angular/core';
import { DataRoutingModule } from './data.routes';
import { GearThreeDComponent } from './components/gear-three-d/gear-three-d.component';
import { DataComponent } from './data.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MAT = [
  MatButtonModule,
  MatCardModule,
];
const PAGES = [
    
];
const COMPONENTS = [
  GearThreeDComponent,
  DataComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [DataRoutingModule,
    ...MAT,
  ],
  providers:[]
})
export class DataModule { }
