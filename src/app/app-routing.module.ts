import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FirstPage/login/login.component';
import { RegisterComponent } from './FirstPage/register/register.component';
import { PageNotFoundComponent } from './_helpers/page-not-found/page-not-found.component';
import { TabledataComponent } from './SecondPage/tabledata/tabledata.component';


const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tabledata', component: TabledataComponent}
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }