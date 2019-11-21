import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { EmployeesComponent } from './employees/employees.component';
import { fakeBackendProvider } from './helpers/fake-bakend';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    PagenotfoundComponent,
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'employees', component: EmployeesComponent, canActivate:[AuthGuard]},
      {path: 'page-not-found', component: PagenotfoundComponent},
      {path: 'logout', component: LogoutComponent},


    ])
  ],
  providers: [
   
    fakeBackendProvider,
   AuthGuard 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
