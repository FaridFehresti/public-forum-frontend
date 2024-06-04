import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeServiceService } from './time-service.service';
import { CommonModule } from '@angular/common';
import {  MatCardModule } from '@angular/material/card';
type ITime = 'short' | 'medium' | 'long' | 'full'| 'shortDate' | 'mediumDate'| 'longDate' | 'fullDate' | 'shortTime' | 'mediumTime' | 'longTime' | 'fullTime'


@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit,OnDestroy{
  @Input() type:ITime = 'mediumTime'
  timeSub:Subscription | null = null;
  currentDate:Date | null = null
  constructor( private timeService:TimeServiceService){

  }
  ngOnInit(): void {
    this.getTime()
  }
  getTime(){
    this.timeSub = this.timeService.getRealTimeData().subscribe((time)=>{
      console.log(time)
      this.currentDate = time
    })
  }
  ngOnDestroy(): void {
    
  }
}
