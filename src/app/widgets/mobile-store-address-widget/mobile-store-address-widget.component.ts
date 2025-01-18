import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-store-address-widget',
  templateUrl: './mobile-store-address-widget.component.html',
  styleUrls: ['./mobile-store-address-widget.component.scss']
})
export class MobileStoreAddressWidgetComponent implements OnInit {

  @Input() City:string = 'Prayagraj'
  @Input() small_Address:string = 'MG Road, Prayagraj'
  @Input() Address:string = '4140 Parker Rd. Allentown, New Mexico 31134'

  constructor() { }

  ngOnInit(): void {
  }

}
