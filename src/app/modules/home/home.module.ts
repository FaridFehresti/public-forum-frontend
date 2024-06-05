import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmPopUpAnimation, ConfirmPopUpComponent } from 'src/app/shared/components/confirm-popup/confirm-popup.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StatComponent } from './main-layout/components/tabs/stat/stat.component';
import { DataComponent } from './main-layout/components/tabs/data/data.component';
import { InventoryComponent } from './main-layout/components/tabs/inventory/inventory.component';
import { MapComponent } from './main-layout/components/tabs/map/map.component';
import { SocialComponent } from './main-layout/components/tabs/social/social.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SettingComponent } from './main-layout/components/settings/setting/setting.component';
import { ProfileComponent } from './main-layout/components/settings/profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { CircularMenuComponent } from 'src/app/shared/components/circular-menu/circular-menu.component';


const MAT = [
  MatButtonModule,
  MatTabsModule,
  MatBadgeModule,
  MatMenuModule,
  MatCardModule,
];

const PAGES = [
    
];
const COMPONENTS = [
    HomeComponent, 
    MainLayoutComponent,
    StatComponent,
    DataComponent,
    InventoryComponent,
    MapComponent,
    SocialComponent,
    SettingComponent,
    ProfileComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    HomeRoutingModule,
    ConfirmPopUpAnimation,
    ConfirmPopUpComponent,
    ClockComponent,
    CircularMenuComponent,
    ...MAT,
  ],
  providers:[
  ]
})
export class HomeModule { }
