import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  @Input() jewel_name:string = 'Platinum Ring'
  @Input() info:string = 'ME57_18 Stainless Steel Titanium'
  @Input() price:string = '₹ 1,34,507'

  constructor() { }

  ngOnInit(): void {
  }

}
