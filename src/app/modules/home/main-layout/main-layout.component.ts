import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  selectedTab: number = 0
  onTabChange(tabIndex: any) {
    this.selectedTab = tabIndex
  }
}
