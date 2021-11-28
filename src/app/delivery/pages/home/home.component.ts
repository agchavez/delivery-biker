import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  name!:string;
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  aproved :boolean = false;
  isLinear:boolean = false;
  firstFormGroup!: FormGroup;
  constructor(
    private authservice: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.name = this.authservice.biker.firstName;
  }
  next(){
      console.log(this.aproved);

      if(this.aproved){

          this.router.navigateByUrl('/delivery/list');

      }
  }
}
