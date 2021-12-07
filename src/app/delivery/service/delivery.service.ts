import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderResponse } from '../interface/order';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseUrl = 'http://localhost:8080/api/';
  constructor(
    private http: HttpClient,
  ) { }

  getOrders(){
    console.log("here");

      return this.http.get<OrderResponse[]>(this.baseUrl + 'order/?status=pending');
  }
}
