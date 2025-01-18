import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { DialogRef } from '@angular/cdk/dialog';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit{
  variantsForm: FormGroup = new FormGroup({})
  newMaterialForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    variants: this.variantsForm,
    masterVariant:new FormControl(),
    autoCalculate:new FormControl()
  });
  variants: any[] = []
  units: string[] = ["gram","caret","karet"]
  constructor(private databaseService:DatabaseService,private dialogRef:DialogRef) { }
  colorsVariants:{name:string}[]=[]
  purityvariants:{name:string,rate:number}[] = []
  ngOnInit(): void {
      // this.newMaterialForm.valueChanges.subscribe((val)=>{
      //   this.calculateRatioPricing()
      // })
  }

  delete(variantIndex:any){
    this.variants.splice(variantIndex,1)
    this.variantsForm.removeControl(variantIndex.toString())
  }

  selectMasterVariant(checked:boolean,variantIndex:any){
    console.log(checked,variantIndex);
    
    if (checked) {
      this.newMaterialForm.get('masterVariant')!.setValue(variantIndex)
    }
  }

  addVariant() {
    let newVariantFormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      rate: new FormControl('',[Validators.required]),
      ratio: new FormControl(''),
      id:new FormControl(this.generateId())
    })
    this.variantsForm.addControl(this.variants.length.toString(), newVariantFormGroup)
    this.variants.push(newVariantFormGroup)
  }

  calculateRatioPricing(){
    let variants = []
    for (const key in this.newMaterialForm.value.variants) {
      if (Object.prototype.hasOwnProperty.call(this.newMaterialForm.value.variants, key)) {
        const variant = this.newMaterialForm.value.variants[key];
        variants.push(variant)
      }
    }
    // this.newMaterialForm.value.variants = variants
    // calculate ratios between rate of variants
    if (this.newMaterialForm.value.autoCalculate) {
      var masterRatio = variants[this.newMaterialForm.value.masterVariant].rate;
      console.log(variants,masterRatio);
      for (let i = 0; i < variants.length; i++) {
        const variant = variants[i];
        variant.ratio = (variant.rate/masterRatio)*100
        // set value
        let current = this.variantsForm.controls[i.toString()]
        if (current!=null) {
          current.get('ratio')!.setValue(variant.ratio)
        }
      }
    }
  }

  calculatePricingFromRatio(){
    let variants = []
    for (const key in this.newMaterialForm.value.variants) {
      if (Object.prototype.hasOwnProperty.call(this.newMaterialForm.value.variants, key)) {
        const variant = this.newMaterialForm.value.variants[key];
        variants.push(variant)
      }
    }
    // this.newMaterialForm.value.variants = variants
    // calculate ratios between rate of variants
    if (this.newMaterialForm.value.autoCalculate) {
      var masterRatio = variants[this.newMaterialForm.value.masterVariant].rate;
      console.log(variants,masterRatio);
      for (let i = 0; i < variants.length; i++) {
        const variant = variants[i];
        variant.rate = (variant.ratio/100)*masterRatio
        // set value
        let current = this.variantsForm.controls[i.toString()]
        if (current!=null) {
          current.get('rate')!.setValue(variant.rate)
        }
      }
    }
  }

  submit(){
    if (this.newMaterialForm.valid && this.variantsForm.valid){
      console.log(this.newMaterialForm.value);
    this.newMaterialForm.disable()
    this.variantsForm.disable()
    let variants = []
    for (const key in this.newMaterialForm.value.variants) {
      if (Object.prototype.hasOwnProperty.call(this.newMaterialForm.value.variants, key)) {
        const variant = this.newMaterialForm.value.variants[key];
        variants.push(variant)
      }
    }
    this.newMaterialForm.value.variants = Array.from(variants)
    
    let data = {
      name:this.newMaterialForm.value.name,
      variants:variants,
      colors:this.colorsVariants,
      autoCalculate:this.newMaterialForm.value.autoCalculate,
      masterVariant:this.newMaterialForm.value.masterVariant
    }
    console.log("final  ",this.newMaterialForm.value);
    this.databaseService.addMaterial(data).then((material) => {
      Notify.success('Material added.');
    }).catch((error) => {
      Notify.failure('Material could not be added.');
    }).finally(() => {
      this.newMaterialForm.reset()
      this.newMaterialForm.enable()
      this.dialogRef.close(this.newMaterialForm.value)
    })
    } else {
      console.log(this.newMaterialForm,this.newMaterialForm.valid);
      console.log(this.variantsForm,this.variantsForm.valid);
      
    }
  }

  generateId(){
    return Math.random().toString(36);
  }

  cancel(){
    this.dialogRef.close();
    this.variantsForm.reset();
    this.newMaterialForm.reset()
  }
}
