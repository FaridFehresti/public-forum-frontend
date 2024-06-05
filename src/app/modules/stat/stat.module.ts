import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { StatRoutingModule } from './stat.routes';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';

@NgModule({
  declarations: [StatComponent],
  imports: [
    CommonModule,
    StatRoutingModule,
    ClockComponent,
  ],
})
export class StatModule {}
