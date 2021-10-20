import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showPass(){
    this.show = !this.show;
  }

}
