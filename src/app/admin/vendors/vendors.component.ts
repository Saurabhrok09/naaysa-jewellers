import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  items = [
    {
      vendor_name:'Tansihq',
      vendor_id:'PJH234',
      products:30
  
    },
    {
      vendor_name:'Tansihq',
      vendor_id:'PJH234',
      products:30
  
    },
    {
      vendor_name:'Tansihq',
      vendor_id:'PJH234',
      products:30
  
    },
    {
      vendor_name:'Tansihq',
      vendor_id:'PJH234',
      products:30
  
    },
    {
      vendor_name:'Tansihq',
      vendor_id:'PJH234',
      products:30
  
    },
    {
      vendor_name:'Tansihq',
      vendor_id:'PJH234',
      products:30
  
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
