import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";



import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { VerifiedComponent } from './pages/verified/verified.component';
import { InfoComponent } from './pages/info/info.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApproveComponent } from './pages/approve/approve.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    VerifiedComponent,
    InfoComponent,
    ApproveComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
 }
