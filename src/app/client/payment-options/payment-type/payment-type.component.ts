import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {

  @Input() paymentType: string="";
  @Input() discount:string="";
  hidden:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
showDiscount(){
  if(this.paymentType=="Wallet"){
    this.hidden=!this.hidden;
  }


}
}
