import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { StatRoutingModule } from './stat.routes';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { ThreeDModelComponent} from './components/three-d-model/three-d-model.component'

const COMPONENTS = [
    ThreeDModelComponent,
    StatComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    StatRoutingModule,
    ClockComponent,
  ],
})
export class StatModule {}
