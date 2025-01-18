import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-address-product-widget',
  templateUrl: './mobile-address-product-widget.component.html',
  styleUrls: ['./mobile-address-product-widget.component.scss']
})
export class MobileAddressProductWidgetComponent implements OnInit {

  @Input() jewel_Name:string = 'Gold Ring'
  @Input() Date:string = 'Tue, Jul 31'

  constructor() { }

  ngOnInit(): void {
  }

}
