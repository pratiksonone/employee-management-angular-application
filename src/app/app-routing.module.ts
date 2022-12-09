import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        component: AboutComponent,
      },
      {
        path: 'employees',
        // canActivate: [AuthGuard],
        component: EmployeesComponent,
      },
      {
        path: 'register',
        canActivate: [AuthGuard],
        component: RegistrationComponent,
      },
    ],
  },
  { path: 'error', canActivate: [AuthGuard], component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
