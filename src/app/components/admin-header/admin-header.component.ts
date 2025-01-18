import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Input() feature_Name:string = 'Add Product'
  @Input() features:any[] = [this.feature_Name] 

 

  constructor() { }

  ngOnInit(): void {
  }

}
