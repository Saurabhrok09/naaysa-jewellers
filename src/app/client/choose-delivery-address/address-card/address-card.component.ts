import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() name:String="JOHN";
  @Input() last_name:String="DOE";
  @Input() address_type:String="Work";
  @Input() number:String="";
  @Input() address:String="10880 Malibu Point, 90265 CA 90265, USA";
  @Input() phone:String="+31 525-551-555";

  constructor() { }

  ngOnInit(): void {
  }

}
