import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})
export class SelectLocationComponent implements OnInit {
  @ViewChild('content') content: any;
  closeResult!: string;
  selectedLocation = new  FormControl('')
  constructor(private modal: NgbModal,
    config: NgbModalConfig) {
    }

  ngOnInit(): void {
  }
  locations: any   = [
     {
        id:1,
        name:"La Paz"
    },
    {
      id:2,
      name:"Comayagua"
  }
  ]
  onChangeLocation(){

  }
  open() {

    // and use the reference from the component itself
    this.modal.open(this.content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        console.log(reason);
    });
}

}
