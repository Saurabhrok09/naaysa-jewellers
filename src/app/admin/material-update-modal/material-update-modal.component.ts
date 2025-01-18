import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Variant } from 'src/app/structures/product.structure';

import { Material } from '../materials/materials.component';

@Component({
  selector: 'app-material-update-modal',
  templateUrl: './material-update-modal.component.html',
  styleUrls: ['./material-update-modal.component.scss'],
})
export class MaterialUpdateModalComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private dialogRef: DialogRef
  ) {}
  variants: NewVariant[] = [];
  materials:NewMaterial[] = []
  @Output() requestCancel: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.databaseService.getMaterials().then((materials) => {
      this.materials = materials.docs.map((doc)=>{return {...doc.data(),id:doc.id} as Material})
      this.variants = materials.docs
        .map((material,index) => {
          return {
            ...material.data()['variants'][material.data()['masterVariant']],
            id: material.id,
            masterVariant: material.data()['masterVariant'],
            variants: material.data()['variants'],
            index:index
          };
        })
        .filter((variant) => variant.rate !== undefined)
        .map((variant) => {
          return {
            ...variant,
            newRate: variant.rate,
          };
        });
      console.log('this.materials', this.variants);
    });
  }

  cancel() {
    this.requestCancel.emit(true);
  }

  save() {
    this.materials.forEach((material,index) => {
      
    })
    this.variants.forEach((variant) => {
      if (
        variant.newRate != undefined &&
        variant.newRate != variant.rate &&
        variant.newRate > 0
      ) {
        this.materials[variant.index].variants.forEach((localVariant,index) => {
          if (localVariant.name != variant.name){
            let newRate = (variant.newRate/100) * variant.variants[index].ratio;
            console.log('newRate', newRate,this.materials[variant.index]['name']);
            this.materials[variant.index].variants[index].rate = newRate;
          } else {
            this.materials[variant.index].variants[index].rate = variant.newRate;
          }
          this.materials[variant.index]['updated'] = true;
        })
      }
    });
    this.materials.filter((data)=>data.updated && data.id).forEach((material,index) => {
      console.log('material', material.updated,material);
      this.databaseService.updateMaterial(material.id!,material.variants)
    })
    this.dialogRef.close();
  }
}
export type NewMaterial = Material & {
  updated?:boolean
}
// extend Variant and add newRate property
export type NewVariant = Variant & {
  id: string;
  newRate: number;
  masterVariant: any;
  variants: Variant[];
  index:number
};
