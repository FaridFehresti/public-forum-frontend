import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';


const COMPONENTS = [
  AppComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
  ],

  bootstrap: [AppComponent] ,

})
export class AppModule { }
