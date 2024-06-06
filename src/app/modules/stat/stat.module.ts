import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { StatRoutingModule } from './stat.routes';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { ThreeDModelComponent} from './components/three-d-model/three-d-model.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

const COMPONENTS = [
    ThreeDModelComponent,
    StatComponent
]
const MAT = [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MAT,
    CommonModule,
    StatRoutingModule,
    ClockComponent,
  ],
})
export class StatModule {}
