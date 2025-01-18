import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-option-widget',
  templateUrl: './payment-option-widget.component.html',
  styleUrls: ['./payment-option-widget.component.scss']
})
export class PaymentOptionWidgetComponent implements OnInit {
  @Input() src:string = 'assets/upi.png';
  @Input() type:string = 'UPI';
  constructor() { }

  ngOnInit(): void {
  }

}
