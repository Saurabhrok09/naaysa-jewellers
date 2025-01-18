import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate-store',
  templateUrl: './locate-store.component.html',
  styleUrls: ['./locate-store.component.scss']
})
export class LocateStoreComponent implements OnInit {

  @Input() store_Timing:string = '11:30 AM to 9:00PM'
  @Input() store_Address:string = '36 B MG marg Subhash Chauraha, near raj karan palace, Civil Lines'
  @Input() store_Number:string = '+91-991965489'

  address_widget = [
    {
      City:'Prayagraj',
      small_Address:'MG Road, Prayagraj',
      Address:'4140 Parker Rd. Allentown, New Mexico 31134'
    },
    {
      City:'Prayagraj',
      small_Address:'MG Road, Prayagraj',
      Address:'4140 Parker Rd. Allentown, New Mexico 31134'
    },
    {
      City:'Prayagraj',
      small_Address:'MG Road, Prayagraj',
      Address:'4140 Parker Rd. Allentown, New Mexico 31134'
    },
    {
      City:'Prayagraj',
      small_Address:'MG Road, Prayagraj',
      Address:'4140 Parker Rd. Allentown, New Mexico 31134'
    },
  ]
  feature_widget = [
    {
      src:'assets/feature1.png',
      text_Feature:'Lifetime Exchange & Buyack'
    },
    {
      src:'assets/feature2.png',
      text_Feature:'Lifetime Exchange & Buyack'
    },
    {
      src:'assets/feature3.png',
      text_Feature:'Lifetime Exchange & Buyack'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
