import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  panelOpenState = false;
  id!: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    //Obtener id por el parametro
     this.id = this.router.url.split('/')[2];
  }

}
