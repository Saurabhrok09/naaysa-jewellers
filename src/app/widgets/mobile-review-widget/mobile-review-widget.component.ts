import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-review-widget',
  templateUrl: './mobile-review-widget.component.html',
  styleUrls: ['./mobile-review-widget.component.scss']
})
export class MobileReviewWidgetComponent implements OnInit {
  
  @Input() review:string = 'Forevermark Setting Solitaire Ring, White Gold, 1.80 ctw/ Round /15'

  constructor() { }

  ngOnInit(): void {
  }

}
