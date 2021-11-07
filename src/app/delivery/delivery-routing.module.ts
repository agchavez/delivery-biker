import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { PorfileComponent } from './pages/porfile/porfile.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'home', component:HomeComponent},
      {path:'detail', component:DetailProductComponent},
      {path:'porfile', component:PorfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
