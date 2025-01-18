import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  @Input() delivery_Date: string = '20 April 2022'
  @Input() disc_percentage: string = '30%'
  @Input() subtotal: string = '₹ 1,34,507'
  @Input() discount: string = '₹ 900'
  @Input() material_Price: string = '₹ 15000'
  @Input() material: string = 'Gold'
  @Input() gst: string = '₹ 800'
  @Input() tax: string = '₹ 250'
  @Input() delivery: string = '₹ 150'
  @Input() total: string = '₹ 1,34,507'
  @Input() saved: string = '₹ 500'

  onclick() {

    alert('Your Order has been Placed')
  }
  pop: boolean = false;
  popp: boolean = false;




  onclicked() {
    this.pop = true;
    setTimeout(() => {
      this.popp = true;
    }, 4000);
  }
  home() {
    this.pop = false;
    this.popp = false;
  }
  constructor() {
  }

  ngOnInit(): void {

  }


}
