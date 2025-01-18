import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-widget',
  templateUrl: './vendor-widget.component.html',
  styleUrls: ['./vendor-widget.component.scss']
})
export class VendorWidgetComponent implements OnInit {
  @Input() vendor_name:string = 'Tanishq'
  @Input() vendor_id:string = 'PJH234'
  @Input() products:number = 74

  constructor() { }

  ngOnInit(): void {
  }

}
