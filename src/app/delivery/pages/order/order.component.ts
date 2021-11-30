import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectLocationComponent } from '../../components/select-location/select-location.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('myModal') modal!: SelectLocationComponent;
  constructor() { }

  ngOnInit(): void {

  }
  open(){
    this.modal.open();
  }

}
