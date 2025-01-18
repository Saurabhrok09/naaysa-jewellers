import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  editMode: boolean = false;

  constructor() {}
  emitButtonAction(action: 'viewAsTable' | 'viewAsCard') {}
  path: any;
  ngOnInit(): void {
    this.path = window.location.pathname;
    console.log(this.path);
  }
}
