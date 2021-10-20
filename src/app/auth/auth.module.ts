import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { VerifiedComponent } from './pages/verified/verified.component';
import { InfoComponent } from './pages/info/info.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    VerifiedComponent,
    InfoComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
