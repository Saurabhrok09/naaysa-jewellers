import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-choose-delivery-address',
  templateUrl: './choose-delivery-address.component.html',
  styleUrls: ['./choose-delivery-address.component.scss']
})
export class ChooseDeliveryAddressComponent implements OnInit {
hidden:boolean=true;
  constructor() {
   }

  ngOnInit(): void {

  }
toggleHidden(){
  this.hidden=!this.hidden;
}


}
