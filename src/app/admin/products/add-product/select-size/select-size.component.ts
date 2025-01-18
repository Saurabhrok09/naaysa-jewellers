import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JewellerySize } from '../add-product.component';

@Component({
  selector: 'app-select-size',
  templateUrl: './select-size.component.html',
  styleUrls: ['./select-size.component.scss']
})
export class SelectSizeComponent implements OnInit{
  selectSizeForm:FormGroup = new FormGroup({})
  constructor(@Inject(DIALOG_DATA) public data:{ name: string; sizes: number[] },public dialogRef:DialogRef){}
  selectedJewllerySize:{ name: string; sizes: {size:number,selected:boolean}[] };

  ngOnInit(): void {
    this.selectedJewllerySize = {
      name:this.data.name,
      sizes: this.data.sizes.map(size=>({size,selected:false}))
    }
  }

  setSizes(sizes:{ size: number; selected: boolean; }[],event:any){
    console.log("sizes",sizes,event.checked);
    sizes.forEach(size=>{
      size.selected = event.checked;
    })
  }

  setSize(size:{ size: number; selected: boolean; },event:any){
    console.log("sizes",size,event.checked);
    size.selected = event.checked;
  }
}
