import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  step = 0;


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  panelOpenState = false
  urlLicencia = ''
  urlVehiculo = ''


  readUrlLicencia(event:any) {
    this.urlLicencia=''
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.urlLicencia = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}

readUrlVehiculo(event:any) {
  this.urlVehiculo=''

  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
          this.urlVehiculo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
}


  
  constructor() { }

  ngOnInit(): void {
  }

}
