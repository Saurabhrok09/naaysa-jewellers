import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  title = 'Table'
  headers = ["SR", "Username", "Email id", "No. of Purchase", "Member since", "Mobile No,", "Action"]


  users = [
    {
      "sr" : "16979",
      "userName" :"Travis",
      "emailId" :"travisscott@07gmail.com",
      "noOfPurchase" :"30",
      "memberSince" :"07/11/2019",
      "mobileNo" :"+919569695869",
      // "Action" :""
    },
    {
      "sr" : "16980",
      "userName" :"Kanye",
      "emailId" :"kanyewest@07gmail.com",
      "noOfPurchase" :"50",
      "memberSince" :"07/11/2017",
      "mobileNo" :"+919569695869",
      // "Action" :""
    },
    {
      "sr" : "16979",
      "userName" :"Pop Smoke",
      "emailId" :"popsmoke@07gmail.com",
      "noOfPurchase" :"70",
      "memberSince" :"07/11/2019",
      "mobileNo" :"+919569695869",
      // "Action" :""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
