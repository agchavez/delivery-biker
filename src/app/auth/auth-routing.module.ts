import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifiedComponent } from './pages/verified/verified.component';
import { InfoComponent } from './pages/info/info.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'verified', component:VerifiedComponent},
      {path:'info', component:InfoComponent},
      {path:'**', redirectTo:'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
