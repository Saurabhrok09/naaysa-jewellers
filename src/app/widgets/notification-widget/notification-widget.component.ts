import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-notification-widget',
  templateUrl: './notification-widget.component.html',
  styleUrls: ['./notification-widget.component.scss']
})
export class NotificationWidgetComponent implements OnInit {
  @Input() day:string = 'Today'
  @Input() time:string = '12:46'
  @Input() installment_status:string = 'Paid'
  @Input() name:string = 'jaydev singh'
  @Input() installment_amount:number = 3000
  @Input() installment_month:string = 'July'
  @Input() installment_month_no:string = "7th"
  checked:any = false
  @Output() selected:EventEmitter<any> = new EventEmitter()
  @Input() isCheckBoxVisible:boolean = false
  check(){
    this.checked = true;
    this.selected.emit(true)
  }
  uncheck(){
    this.checked = false;
    this.selected.emit(false)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
