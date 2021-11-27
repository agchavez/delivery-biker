import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show:boolean = false;
  myForm = this.formbuild.group({
    email: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]]
  });

  constructor(
  private formbuild: FormBuilder,
  private authService: AuthService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  showPass(){
    this.show = !this.show;
  }

  login(){
    this.myForm.markAllAsTouched();
    if (!this.myForm.valid) {
      return
    }
    const body =  {
      email: this.myForm.value.email,
      password: this.myForm.value.password
    }
    this.authService.login(body.email, body.password).subscribe(
      res => {
        console.log(res)
      }
    )

    }
    validatorCampo(campo: string){
      return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched
    }






  }
