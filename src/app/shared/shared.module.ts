import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorComponent } from './pages/error/error.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';




@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    ErrorComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
      FooterComponent,
      NavBarComponent
  ]
})
export class SharedModule {
}
