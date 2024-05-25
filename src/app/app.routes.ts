import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // Redirect empty path to 'auth'
  { path: "", redirectTo: 'auth', pathMatch: 'full' },

  // Your component route
  { path: "home", component: AppComponent },

  // Lazy-loaded module route
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
  },
  
  // Wildcard route for a 404 page or similar
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
