import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifiedComponent } from './pages/verified/verified.component';
import { InfoComponent } from './pages/info/info.component';
import { MainComponent } from './pages/main/main.component';
import { ApproveComponent } from './pages/approve/approve.component';
import { ValidateEmailGuard } from '../guards/validate-email.guard';
import { ValidateTokenGuard } from '../guards/validate-token.guard';


const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'verified', canActivate: [ValidateEmailGuard], canLoad: [ValidateEmailGuard] , component:VerifiedComponent},
      {path:'info',canActivate: [ValidateEmailGuard], canLoad: [ValidateEmailGuard],  component:InfoComponent},
      {path:'approve',canActivate: [ValidateEmailGuard], canLoad: [ValidateEmailGuard], component:ApproveComponent},
      {path:'', redirectTo:'login', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
