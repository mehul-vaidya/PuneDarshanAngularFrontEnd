import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { TouristPlaceComponent } from './components/tourist-place.component';
import { AdminConsoleComponent } from './components/admin-console.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'places', component: TouristPlaceComponent, canActivate: [AuthGuard] },
  { path: 'adminConsole', component: AdminConsoleComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
