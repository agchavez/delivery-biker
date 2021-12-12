import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { FollowComponent } from './pages/follow/follow.component';
import { OrderComponent } from './pages/order/order.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'', component:HomeComponent},
      {path:'detail/:id', component:DetailProductComponent},
      {path:'porfile', component:PorfileComponent},
      {path:'list', component:OrderComponent},
      {path:'**' , redirectTo:''}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
