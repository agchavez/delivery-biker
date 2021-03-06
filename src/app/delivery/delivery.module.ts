import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

import { MaterialModule } from '../material/material.module';

import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PorfileComponent } from './pages/porfile/porfile.component';
import { FollowComponent } from './pages/follow/follow.component';
import { OrderComponent } from './pages/order/order.component';

import { ChartsModule } from 'ng2-charts';
import { SelectLocationComponent } from './components/select-location/select-location.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    DetailProductComponent,
    NavBarComponent,
    PorfileComponent,
    FollowComponent,
    OrderComponent,
    SelectLocationComponent,


  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    SharedModule,
    ChartsModule,
    MaterialModule,

    FontAwesomeModule,

  ]
})
export class DeliveryModule {

 }
