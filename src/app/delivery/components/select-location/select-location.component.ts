import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})
export class SelectLocationComponent implements OnInit {
  @ViewChild('content') content: any;
  closeResult!: string;
  constructor(private modal: NgbModal,
    config: NgbModalConfig) {
    }

  ngOnInit(): void {
  }

  open() {

    // and use the reference from the component itself
    this.modal.open(this.content).result.then((result) => {

    console.log("here");
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        console.log(reason);
    });
}

}
