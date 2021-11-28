import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interface/interfaces';
import { AlertType, ColorAlert, NameAlert } from 'src/app/shared/interfaces/alert.interface';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  show:boolean = false;
  alert!:AlertType;
  myForm = this.formbuild.group({
    email: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]]
  });

  constructor(
  private formbuild: FormBuilder,
  public  dialog        : MatDialog,
  private authService: AuthService,
  private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  showPass(){
    this.show = !this.show;
  }

  login(){
    this.loading = true;
    this.myForm.markAllAsTouched();
    if (!this.myForm.valid) {
      this.alert = {
        name: NameAlert.error,
        icon: faTimesCircle,
        msj:"Datos requeridos",
        color: ColorAlert.error
      }
      this.openDialog();
      return
    }
    const body =  {
      email: this.myForm.value.email,
      password: this.myForm.value.password
    }
    this.authService.login(body.email, body.password).subscribe(
      (res: any) => {
        console.log(res);

        //Correo y contraseña correctos
        if (res.ok) {
          this.router.navigate(['/delivery']);
        }else{
           if (res.verified === undefined) {
            this.alert = {
              name: NameAlert.error,
              icon: faTimesCircle,
              msj:"Datos incorrectos",
              color: ColorAlert.error
            }
            this.openDialog();

          }else if(res.verified === false){
            this.alert = {
              name: NameAlert.warnig,
              icon: faExclamationCircle,
              msj:"Correo no verificado",
              color: ColorAlert.warnig
            }
            this.openDialog();


            this.router.navigateByUrl('/auth/verified');
          }else if(res.verified === true && res.aproved === undefined){

            this.alert = {
              name: NameAlert.warnig,
              icon: faExclamationCircle,
              msj:"Se necesita mas informacion",
              color: ColorAlert.warnig
            }
            this.openDialog();
            this.router.navigateByUrl('/auth/info');
          }else if(res.aproved === false){
            this.alert = {
              name: NameAlert.warnig,
              icon: faExclamationCircle,
              msj:"Usuario no aprobado",
              color: ColorAlert.warnig
          }
          this.openDialog();
          this.router.navigateByUrl('/auth/approve');
        }
      }
      this.loading = false;
    }
    )


    }
    validatorCampo(campo: string){
      return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched
    }





openDialog(){
  this.dialog.open(AlertComponent,{
    hasBackdrop: false,
    data: this.alert
  });
}

  }
