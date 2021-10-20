import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/pages/error/error.component';
import { WelcomeComponent } from './shared/pages/welcome/welcome.component';

const routes: Routes = [
  {
    path:'', component:WelcomeComponent,
  },
  {

    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'delivery',
    loadChildren: ()=> import('./delivery/delivery.module').then(m=>m.DeliveryModule),
  },
  {
    path:'404',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
