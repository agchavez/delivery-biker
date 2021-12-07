import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectLocationComponent } from '../../components/select-location/select-location.component';
import { DeliveryService } from '../../service/delivery.service';
import { OrderResponse } from '../../interface/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('myModal') modal!: SelectLocationComponent;
  orders:OrderResponse[] = [];
  constructor(
    private deliverService: DeliveryService,
    private router:Router
  ) {
    this.deliverService.getOrders().subscribe(
      resp=>{
        this.orders = resp;

      }
    )
  }

  ngOnInit(): void {


  }
  open(){
    this.modal.open();
  }

  onSelect(id:string){
      this.router.navigate(['/delivery/detail',id]);
  }

}
