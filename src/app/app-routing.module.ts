import { AuthGuardService } from './resources/services/auth-guard.service';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./views/dashboard/dashboard.module').then(
      (m) => m.DashboardModule),
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
