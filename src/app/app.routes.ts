import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // Redirect empty path to 'home'
  { path: "", redirectTo: 'home', pathMatch: 'full' },

  // Your component route (corrected import)
  {
    path: "home",
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },

  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }