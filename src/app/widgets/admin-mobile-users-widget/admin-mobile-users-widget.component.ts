import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mobile-users-widget',
  templateUrl: './admin-mobile-users-widget.component.html',
  styleUrls: ['./admin-mobile-users-widget.component.scss']
})
export class AdminMobileUsersWidgetComponent implements OnInit {

  @Input() img:string = 'assets/2.jpeg'
  @Input() name:string = 'Arun Arora'
  @Input() email:string = '@csahbuihf.gmail.com'
  @Input() Id:string = 'S123Sd4'
  @Input() wallet:string = '80000'
  @Input() purchase:number = 698


  constructor() { }

  ngOnInit(): void {
  }

}
