import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit{
  @Input() rating:number = 0;
  wholeStars:number[] = [];
  halfStars:number[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.rating);
    if (this.rating > 5){
      this.rating = 5;
    } else if (this.rating < 0){
      this.rating = 0;
    }

    for (let i = 0; i < Math.floor(this.rating); i++){
      this.wholeStars.push(i);
    }

    if (this.rating % 1 !== 0){
      this.halfStars.push(0);
    }
  }
}
