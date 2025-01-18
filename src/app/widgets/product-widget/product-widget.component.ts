import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { NewVariant, SelectableMaterial } from 'src/app/admin/products/add-product/add-product.component';
import { DatabaseService } from 'src/app/services/database.service';
import { Combination } from 'src/app/structures/product.structure';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {
  @Input() product_name:string = 'Diamond Ring'
  @Input() src:string = 'assets\BIRS0279R20-POSTER-11100.jpg.png'
  @Input() price:number = 125632
  @Input() averageRating:number = 0
  @Input() purity:string = '18k'
  @Input() category:string = 'Women'
  @Input() discount:string = '10%'
  @Input() liked:boolean = false
  @Input() tag:string
  @Input() variants:Combination[] = []
  @Input() materials:SelectableMaterial[] = []

  isLoaded: boolean = false;
  
  onclick(){
    alert('Your Product has Been Added To Cart')
  }
  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    AOS.init();
    console.log(this.variants);
    this.databaseService.variantUpdated.subscribe((data)=>{
      console.log("this.databaseService.variants",this.databaseService.variants);
      this.variants.forEach((combination)=>{
        // get material from database
        combination.combination.forEach((variant)=>{
          let newVariant = this.databaseService.variants.find((newVariant)=>newVariant.id == variant.id)
          if(newVariant){
            // update prices of variant from newVariant
            variant.rate = newVariant.rate
            variant.total = variant.quantity * newVariant.rate
          }
        })
      })
      console.log("this.variants",this.variants);
      this.sumVariant(this.variants)
      this.variants.sort((a,b)=>a.total - b.total)
      this.price = this.variants[0].total
    })
  }

  sumVariant(variants:Combination[]){
    // sum a combination group and set it to total 
    variants.forEach((combination)=>{
      let total = 0
      combination.combination.forEach((variant)=>{
        total += variant.total
      })
      combination.total = total
    })
  }

}
