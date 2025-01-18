import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/structures/product.structure';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit{
  constructor(private databaseService:DatabaseService){}
  categoryForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })
  categories:Category[] = []

  ngOnInit(){
    this.getCategories()
  }

  addCategory(){
    this.databaseService.addCategory(this.categoryForm.value).then((res)=>{
      this.categoryForm.reset();
      this.getCategories();
    })
  }


  deleteCategory(id:string){
    this.databaseService.deleteCategory(id).then((res)=>{
      this.getCategories();
    })
  }

  getCategories(){
    this.databaseService.getCategories().then((res)=>{
      this.categories = res.docs.map((doc:any)=>{return {id:doc.id, ...doc.data()}});
    })
  }
}
