import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-cart-widget',
  templateUrl: './mobile-cart-widget.component.html',
  styleUrls: ['./mobile-cart-widget.component.scss']
})
export class MobileCartWidgetComponent implements OnInit {

  @Input() price:string = '₹ 6,000'
  @Input() jewel_Name:string = 'Golden Ring'
  @Input() status:string = 'In Stock'

  constructor() { }

  ngOnInit(): void {
  }

}
