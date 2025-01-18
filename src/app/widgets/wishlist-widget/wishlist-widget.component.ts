import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-widget',
  templateUrl: './wishlist-widget.component.html',
  styleUrls: ['./wishlist-widget.component.scss']
})
export class WishlistWidgetComponent implements OnInit {

  @Input() name:string = 'Gold jewellery'
  @Input() src:string = 'assets/jewel1.png'
  constructor() { }

  ngOnInit(): void {
  }

}
