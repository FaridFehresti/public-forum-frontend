import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmPopUpAnimation, ConfirmPopUpComponent } from 'src/app/shared/components/confirm-popup/confirm-popup.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StatComponent } from './main-layout/components/stat/stat.component';
import { DataComponent } from './main-layout/components/data/data.component';
import { InventoryComponent } from './main-layout/components/inventory/inventory.component';
import { MapComponent } from './main-layout/components/map/map.component';
import { SocialComponent } from './main-layout/components/social/social.component';



const MAT = [
  MatButtonModule,
  MatTabsModule,
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
    SocialComponent
    
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
