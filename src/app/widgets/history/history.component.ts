import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
@Input() arrived:boolean =true;
  active = true;
  constructor() { }
  ngOnInit(): void {
  }
  toggleActive(){
    this.active = !this.active;
  }

}
