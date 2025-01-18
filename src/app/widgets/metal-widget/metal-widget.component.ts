import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metal-widget',
  templateUrl: './metal-widget.component.html',
  styleUrls: ['./metal-widget.component.scss']
})
export class MetalWidgetComponent implements OnInit {

  @Input() name:string = 'Gold jewellery'
  @Input() src:string = 'assets/jewel1.png'

  constructor() { }

  ngOnInit(): void {
  }

}
