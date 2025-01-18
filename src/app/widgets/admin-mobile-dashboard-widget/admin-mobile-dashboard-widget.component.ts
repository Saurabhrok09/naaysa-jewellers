import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mobile-dashboard-widget',
  templateUrl: './admin-mobile-dashboard-widget.component.html',
  styleUrls: ['./admin-mobile-dashboard-widget.component.scss']
})
export class AdminMobileDashboardWidgetComponent implements OnInit {

  @Input() product_Name: string = 'Product'
  @Input() product_Id: string = '12345678912'
  @Input() product_price: string = '₹30,000'
  @Input() sold: number = 14
  @Input() return: number = 14
  @Input() material: string = 'Diamond'
  @Input() weight: string = '5.56 grams'
  @Input() src: string = 'assets/2.jpeg'


  constructor() { }

  ngOnInit(): void {
  }

}
