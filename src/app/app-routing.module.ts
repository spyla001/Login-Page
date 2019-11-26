import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FirstPage/login/login.component';
import { RegisterComponent } from './FirstPage/register/register.component';
import { PageNotFoundComponent } from './_helpers/page-not-found/page-not-found.component';
import {EmployeeDataComponent} from './employee-data/employee-data.component';
import {EmploeeFormComponent} from './emploee-form/emploee-form.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'employeedata', component: EmployeeDataComponent},
  {path: 'employeeform', component: EmploeeFormComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
