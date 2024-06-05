import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  selectedTab: number = 0
  isCircleMenuVisible: boolean = false;
  onTabChange(tabIndex: any) {
    this.selectedTab = tabIndex
  }
  openCircleMenu(){
    this.isCircleMenuVisible = !this.isCircleMenuVisible
  }
  closeCircleMenu(){
    this.isCircleMenuVisible = false
  }
}
