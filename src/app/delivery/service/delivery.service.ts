import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderByIDResponse, OrderResponse, PutStatusOrder } from '../interface/order';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient,
  ) { }

  getOrders(){
    console.log("here");

      return this.http.get<OrderResponse[]>(this.baseUrl + 'order/?status=pending');
  }

  getOrderById(id:string){
    return this.http.get<OrderByIDResponse>(this.baseUrl + 'order/' + id);
  }
  putOrderById(id:string, status:string){
    const header = new HttpHeaders().set('x-token',  localStorage.getItem('token') || "");
    return this.http.put<PutStatusOrder>(this.baseUrl + 'order/' + id, {status}, {
      headers: header
    });
  }
}
