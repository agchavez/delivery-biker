import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar-del',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name!:string;
  imgUrl!:string | undefined;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.name = this.authService.biker.firstName + ' ' + this.authService.biker.lastName;
    this.imgUrl = this.authService.biker.imgUrl;

  }

}
