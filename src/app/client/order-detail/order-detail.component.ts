import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  @Input() order_Id:string = '#112K6'
  @Input() status:string = 'Delivered'
  @Input() price:string = '₹ 1,34,507'
  @Input() discription:string = 'ME57_18 Stainless Steel Titanium'
  @Input() product_Name:string = 'Diamond Ring'
  @Input() subtotal_Price:string = '₹ 1,34,507'
  @Input() total_Price:string = '₹ 1,34,507'
  @Input() discount:string = '₹ -500'
  @Input() delivery:string = '₹ 200'
  @Input() tax:string = '₹ 100'
  @Input() out_For_Delivery:string = 'Fri, 16th Jul'
  @Input() shipped:string = 'Fri, 16th Jul'
  @Input() delivered:string = 'Fri, 16th Jul'
  @Input() odered:string = 'Fri, 16th Jul'
  @Input() arrived:boolean =true;
  active = true;
  constructor() { }
  ngOnInit(): void {
  }
  toggleActive(){
    this.active = !this.active;
  }


}
