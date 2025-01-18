import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  editMode: boolean = false

  items = [
    {
      day : 'Today',
      time : '12:46',
      installment_status : 'Paid',
      name : 'jaydev singh',
      installment_amount : 3000,
      installment_month : 'July',
      installment_month_no: "7th",

    },
    {
      day : 'Today',
      time : '12:46',
      installment_status : 'Paid',
      name : 'jaydev singh',
      installment_amount : 3000,
      installment_month : 'July',
      installment_month_no: "7th",

    },
    {
      day : 'Today',
      time : '12:46',
      installment_status : 'Paid',
      name : 'jaydev singh',
      installment_amount : 3000,
      installment_month : 'July',
      installment_month_no: "7th",

    },
    {
      day : 'Today',
      time : '12:46',
      installment_status : 'Paid',
      name : 'jaydev singh',
      installment_amount : 3000,
      installment_month : 'July',
      installment_month_no: "7th",

    },
    {
      day : 'Today',
      time : '12:46',
      installment_status : 'Paid',
      name : 'jaydev singh',
      installment_amount : 3000,
      installment_month : 'July',
      installment_month_no: "7th",

    },
    {
      day : 'Today',
      time : '12:46',
      installment_status : 'Paid',
      name : 'jaydev singh',
      installment_amount : 3000,
      installment_month : 'July',
      installment_month_no: "7th",

    },
  ]
  value(value: boolean) {
    console.log(value)
  }
  constructor() { }

  ngOnInit(): void {
  }


}
