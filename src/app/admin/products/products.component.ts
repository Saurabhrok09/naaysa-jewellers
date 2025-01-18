import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';
import { Product } from 'src/app/structures/product.structure';
import { Material } from '../materials/materials.component';
import { DatabaseService } from 'src/app/services/database.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  path: string = window.location.pathname;
  products:Product[] = []
  constructor(private dialog:Dialog,private databaseService:DatabaseService) {}
  ngOnInit(): void {
   this.databaseService.getProducts().then((res)=>{
    this.products = res.docs.map((doc)=>{return {...doc.data(),id:doc.id} as Product})
   })
  }

  addProduct(){
    const dialog = this.dialog.open(AddProductComponent)
    dialog.closed.subscribe((res)=>{
      console.log(res);
    })
  }

  manageCategories(){
    const dialog = this.dialog.open(ManageCategoryComponent)
    dialog.closed.subscribe((res)=>{
      console.log(res);
    })
  }

}

@Pipe({name: 'materialVariants'})
export class MaterialVariantsPipe implements PipeTransform {
  transform(value: Material|undefined): string {
    if (value==undefined){return "N/A"}
    return value.variants.map((variant)=>{return variant.name}).join(', ')
  }
}