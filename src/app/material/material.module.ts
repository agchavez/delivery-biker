import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import { MatExpansionModule } from '@angular/material/expansion';


import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  exports:[
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    
    
    
  ]
  

})


export class MaterialModule { 
  
 
}




