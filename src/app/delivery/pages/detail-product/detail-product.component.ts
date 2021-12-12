import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderResponse, OrderByIDResponse, PutStatusOrder } from '../../interface/order';
import { DeliveryService } from '../../service/delivery.service';
import * as mapboxgl  from 'mapbox-gl';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  statusOrder: string = "pending";
  newstate:string = "accepted";
  estadoOrden:string = "Tomar orden"
  panelOpenState = false;
  id!: string;
  order!:OrderByIDResponse
  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private route: Router
  ) {
    this.id = this.router.url.split('/')[3];
    console.log(this.id);
    this.deliveryService.getOrderById(this.id).subscribe(
       (data: OrderByIDResponse) => {
         this.order = data;
         (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYWdjaGF2ZXoiLCJhIjoiY2tuYXVzczZzMWxlcjJucW45bzgxdmNlYiJ9.zIZcm8sWOgsA5iTpH7OPxQ';
        const {lat, long} = this.order.order.orderDetails[0].product.company.location;
        var map = new mapboxgl.Map({
        container: 'mapa',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: {
          lat: this.order.direction.lat,
          lon: this.order.direction.long
        },
        zoom: 14,
        });
        const marker = new mapboxgl.Marker().setLngLat({lon: parseInt(long), lat: parseInt(lat)}).addTo(map)
        const marker2 = new mapboxgl.Marker().setLngLat({lat: this.order.direction.lat,lon: this.order.direction.long}).addTo(map)

       }
    )

   }
   ngOnInit(): void {
    //Obtener id por el parametro
  }

  next(){

    this.deliveryService.putOrderById(this.order.order._id, this.newstate).subscribe(
      (res:PutStatusOrder) => {
        if(res.ok){
          switch (this.statusOrder) {
            case "pending":

              this.estadoOrden = "En Camino";
              this.statusOrder = "onway"
              this.newstate ="onway"
              break;
            case "onway":
              this.estadoOrden = "En el origen";
              this.statusOrder = "origin"
              this.newstate ="origin"
              break;
            case "origin":
                this.statusOrder = "destiny"
                this.estadoOrden = "En el destino"
                this.newstate ="destiny"
                break;
            case "destiny":
                this.statusOrder = "cancelled"
                this.estadoOrden = "Entregada"
                this.newstate ="cancelled"
                break;
            case "cancelled":
              this.route.navigate(['/delivery/orders'])
              break;
            default:
              break;
          }

        }
      }
    )

  }


}
