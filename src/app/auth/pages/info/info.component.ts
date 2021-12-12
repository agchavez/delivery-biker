import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { AlertType, ColorAlert, NameAlert } from '../../../shared/interfaces/alert.interface';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  step = 0;
  loading:boolean = false;
  alert!:AlertType
  imgLicense!:File;
  imgCard!:File;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  //alertas

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    //validar campos
    if(this.imgLicense !== undefined){
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }

  panelOpenState = false
  urlLicencia = ''
  urlVehiculo = ''

  save(){
    this.loading = true;
      //validar formulcarios
      if(this.imgLicense === undefined || this.imgCard === undefined){
        this.alert = {
          name: NameAlert.error,
          icon: faTimesCircle,
          msj:"Informacion requerida",
          color: ColorAlert.error
        }
        this.openDialog();
          return
      }
      //Enviar archivos al servicio
      this.auth.uploadImage(this.imgLicense, this.imgCard).subscribe(
        (resp: any)=>{
          if(resp.ok){
            this.alert = {
              name: NameAlert.success,
              icon: faExclamationCircle,
              msj:"Informacion actualizada",
              color: ColorAlert.success
            }
            this.openDialog();
            this.router.navigateByUrl('/auth/approve');

          }else{
            this.loading = false;
            this.alert = {
              name: NameAlert.error,
              icon: faTimesCircle,
              msj:resp.msj,
              color: ColorAlert.error
            }
            this.openDialog();
          }
        }
      )

  }
  readUrlLicencia(event:any) {

    this.urlLicencia=''
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();


      this.imgLicense = event.target.files[0];
        reader.onload = (event:any) => {

            this.urlLicencia = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}

readUrlVehiculo(event:any) {
  this.urlVehiculo='SDFSD';
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    this.imgCard = event.target.files[0];

      reader.onload = (event:any) => {
          this.urlVehiculo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
}

//Abrir dialog
openDialog(){
  this.dialog.open(AlertComponent,{
    hasBackdrop: false,
    data: this.alert
  });
}


}
