import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Variant } from 'src/app/structures/product.structure';

import { AddMaterialComponent } from './add-material/add-material.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  materials:Material[] = []
  constructor(private dialog:Dialog,private databaseService:DatabaseService) { }
  ngOnInit(): void {
   this.databaseService.getMaterials().then((materials) => {
      this.materials = materials.docs.map((material) => {return {...material.data(), id: material.id} as Material})
   })
  }
  addMaterial() {
    const dialogRef = this.dialog.open(AddMaterialComponent)
    dialogRef.closed.subscribe((material:any) => {
      if(material satisfies Material) {
        this.materials.push(material)
      }
    })
  }

  delete(materialId:string){
    this.databaseService.deleteMaterial(materialId).then(() => {
      this.materials = this.materials.filter((material) => material.id !== materialId)
    })
  }
}
export type Material = {
  id?: string,
  autoCalculate:boolean;
  masterVariant:number;
  name: string,
  variants: Variant[]
  colors: {name:string}[],
}
