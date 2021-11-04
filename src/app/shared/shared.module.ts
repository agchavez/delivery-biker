import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorComponent } from './pages/error/error.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { AlertComponent } from './components/alert/alert.component';
import { MapComponent } from './components/map/map.component';
// import { AgmCoreModule } from '@agm/core';




@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    ErrorComponent,
    WelcomeComponent,
    AlertComponent,
    MapComponent
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
     MaterialModule,
  //   AgmCoreModule.forRoot({
  //     apiKey: 'AIzaSyDppqjwNUIPk0Gqi1vICAtUNHwBAPXWr3M'    
  //  })

  ],
  exports:[
      FooterComponent,
      NavBarComponent,
      
      MapComponent
      
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
}
