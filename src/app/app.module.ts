import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './modules/auth/interceptors/auth-interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const COMPONENTS = [
  AppComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideAnimationsAsync(),
  ],

  bootstrap: [AppComponent] ,

})
export class AppModule { }
