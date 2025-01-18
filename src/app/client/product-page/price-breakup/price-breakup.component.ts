import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-breakup',
  templateUrl: './price-breakup.component.html',
  styleUrls: ['./price-breakup.component.scss']
})
export class PriceBreakupComponent implements OnInit{
  hiddenPrice:boolean=false;
  constructor() { }
  ngOnInit(): void {

  }
  showPrice(){
    this.hiddenPrice=!this.hiddenPrice;
  }
}


