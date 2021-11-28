import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertType, ColorAlert, NameAlert } from '../../../shared/interfaces/alert.interface';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  loading: boolean = false;
  alert!:AlertType
  constructor(
    private authService:AuthService,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  validate()  {
    this.loading = true;
    this.authService.isAproved().toPromise().then(
      res => {
        if (res.ok) {
          this.router.navigate(['/delivery']);
        }
        //status 400
        this.alert = {
          name: NameAlert.info,
          icon: faInfoCircle,
          msj:"La cuenta no aprovada",
          color: ColorAlert.info
        }
        this.openDialog();
        this.loading = false;

      }
    ).catch(
       err =>{
         //status 400
      this.alert = {
        name: NameAlert.info,
        icon: faInfoCircle,
        msj:"La cuenta aun no ha sido aprovada",
        color: ColorAlert.info
      }
      this.openDialog();
      this.loading = false;
       }
    );

  }

  //Abrir dialog
openDialog(){
  this.dialog.open(AlertComponent,{
    hasBackdrop: false,
    data: this.alert
  });
}
}
