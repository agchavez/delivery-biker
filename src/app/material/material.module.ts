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
  ]
  

})


export class MaterialModule { 
  
 
}




