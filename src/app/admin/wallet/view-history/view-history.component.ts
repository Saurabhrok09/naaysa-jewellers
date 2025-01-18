import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {

  @Input() date:string = 'Nov,22,2021'
  @Input() id:string = "ID #99H33G"
  @Input() amnt:string = '₹ 3,000'
  

  constructor() { }

  ngOnInit(): void {
  }

}
