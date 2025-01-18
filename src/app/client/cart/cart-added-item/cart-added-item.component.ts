import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-added-item',
  templateUrl: './cart-added-item.component.html',
  styleUrls: ['./cart-added-item.component.scss']
})
export class CartAddedItemComponent implements OnInit {

  @Input() imgsrc: String="";
  @Input() item_name: String="";
  @Input() item_no:String="";
  @Input() item_quantity:String="";
  @Input() item_date:String="";
  @Input() item_save:String="";
  @Input() item_price: String= '';
  @Input() stock: String="";
  @Input() item_count: String="";
  @Input() total_price: String="";
  @Output() deleted:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    alert('Removed')
    this.deleted.emit(true);
  }
  alert(){
    alert('Added to wishlist');
  }
  // for increasing and decreasing button
  quantityValue:number=1;
  i=1;
  minus(){
if(this.i!=0){
  this.i--;
  this.quantityValue=this.i;
}
  }
  plus(){
    if(this.i<=10){
      this.i++;
      this.quantityValue=this.i;
    }
  }
}
