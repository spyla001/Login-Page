import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './FirstPage/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Angular.material';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './FirstPage/register/register.component';
import { DataComponent } from './_helpers/data/data.component';
import { PageNotFoundComponent } from './_helpers/page-not-found/page-not-found.component';
import { UserDataService } from './services/user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SidenavComponent } from './SecondPage/sidenav/sidenav.component';
import { TabledataComponent } from './SecondPage/tabledata/tabledata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DataComponent,
    PageNotFoundComponent,
    SidenavComponent,
    TabledataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UserDataService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
