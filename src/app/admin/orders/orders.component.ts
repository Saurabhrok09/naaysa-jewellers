import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 title = 'Table'
  headers = ["ID", "Name", "Order Date", "Payment", "Status", "Total", "Mobile No,", "Action"]


  orders = [
    {
      "id" : "16979",
      "name" :"Travis",
      "orderDate" :"07/07/2022",
      "payment" :"Done",
      "status" :"Delivered",
      "total" :"₹ 45,000",
      "mobileNo" :"+919569695869",
      // "Action" :""
    },
    {
      "id" : "12987",
      "name" :"Kanye",
      "orderDate" :"07/07/2022",
      "payment" :"Done",
      "status" :"Delivered",
      "total" :"₹ 45,000",
      "mobileNo" :"919569695869",
      // "Action" :""
    },
    {
      "id" : "169696",
      "name" :"The Weeknd",
      "orderDate" :"07/07/2022",
      "payment" :"Done",
      "status" :"Delivered",
      "total" :"₹ 45,000",
      "mobileNo" :"919569695869",
      // "Action" :""
    },

    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
