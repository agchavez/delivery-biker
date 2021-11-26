import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ]


})


export class MaterialModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }

}




