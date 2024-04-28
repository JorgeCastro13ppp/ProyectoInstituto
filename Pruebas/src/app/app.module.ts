// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // Otros componentes aquí según sea necesario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // Agrega el AppRoutingModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
