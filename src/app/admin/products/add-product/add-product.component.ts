import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Category,
  Combination,
  Variant,
} from 'src/app/structures/product.structure';
import { Material } from '../../materials/materials.component';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DatabaseService } from 'src/app/services/database.service';
import { SelectSizeComponent } from './select-size/select-size.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AddProductComponent implements OnInit {
  constructor(
    public dialogRef: DialogRef,
    private databaseService: DatabaseService,
    private dialog:Dialog,
    private dataProvider: DataProviderService
  ) {}
  productImages: string[] = [];
  productImageFiles: File[] = [];
  productImagesData: string[] = [];
  uploadPercent: number = 0;
  variants: Variant[] = [];
  materials: Material[] = [];
  onlineMaterials: Material[] = [];
  filteredMaterials: Material[] = [];
  selectedMaterials: SelectableMaterial[] = [];
  categories: Category[] = [];
  formStage: 0 | 1 | 2 = 0;
  uploading: boolean = false;
  ratings: number[] = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  metalForm: FormGroup = new FormGroup({
    metal: new FormControl(''),
    color: new FormControl(),
    purity: new FormControl(),
    masterMetalSize: new FormControl(),
    masterPurity: new FormControl(),
    masterWeight: new FormControl(),
    masterVariation: new FormControl(),
  });
  purities: { name: string }[] = [
    { name: '24 K' },
    { name: '22 K' },
    { name: '18 K' },
    { name: '14 K' },
  ];
  sizes: { name: string; weight: number; variation: number; type: 'size' }[] = [];
  diamondTypes: string[] = ['Solitaire', 'Secondary'];
  stoneTypes: string[] = ['Solitaire', 'Secondary'];
  configMaterials: string[] = ['Metal', 'Diamond', 'Stone'];
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    averageRating: new FormControl(''),
    materials: new FormControl(['Metal']),
    jewelleryType: new FormControl([]),
  });
  jewelleryTypes: JewellerySize[] = [
    {
      name: 'Ring',
      sizes: [
        {
          name: 'Men',
          sizes: [
            "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25",
          ],
        },
        {
          name: 'Women',
          sizes: [
            "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22",
          ],
        },
      ],
    },
    {
      name: 'Chains',
      sizes: [
        {
          name:'Women',
          sizes:['16','18','20','22','24','26','28','30','32']
        },
        {
          name:'Men',
          sizes:['16','18','20','22','24','26','28','30','32']
        },
      ]
    },
    {
      name:'Bangles',
      sizes:[
        {
          name:'Women',
          sizes:["2","2'2","2'6","2'10","2'14","2'16"]
        }
      ]
    }
  ];
  taxes: { cost: number; name: string }[] = [
    {
      name: 'GST',
      cost: 3,
    }
  ];
  colors: { name: string }[] = [
    { name: 'Red' },
    { name: 'Rose' },
    { name: 'White' },
    { name: 'Pink' },
  ];
  generatedCombinations: Combination[] = [];
  sizeGroupedCombinations: {name:string,variants:{
    variants: any[];
    total: number;
    gold: number;
    goldWeight: number;
    weight: number;
    totalTax: number;
    making: number;
    totalWithoutMaking: number;
    goldRate: number;
    makingRate: number;
    taxRate:number;

  }[]}[] = [];
  materialsForm: FormGroup = new FormGroup({});
  draftProduct: DocumentReference<any> | undefined;
  tags: { name: string }[] = [];
  metals: { viewValue: string }[] = [{ viewValue: 'GOLD' }];
  diamonds: {
    name: string;
    type: string;
    quantity: number;
    variants: {
      name: string;
      weight: number;
      price: number;
      type: 'diamondType';
    }[];
  }[] = [
    {
      name: '',
      type: '',
      quantity: 0,
      variants: [{ name: '', price: 0, weight: 0, type: 'diamondType' }],
    },
  ];
  stones: {
    name: string;
    type: string;
    quantity: number;
    variants: {
      name: string;
      weight: number;
      price: number;
      type: 'stoneType';
    }[];
  }[] = [
    {
      name: '',
      type: '',
      quantity: 0,
      variants: [{ name: '', price: 0, weight: 0, type: 'stoneType' }],
    },
  ];
  // masterVariant:
  stoneVariants: { name: string; weight: number; price: number }[] = [];
  finalCombinations: {
    variants: any[];
    total: number;
    gold: number;
    goldWeight: number;
    weight: number;
    totalTax: number;
    making: number;
    totalWithoutMaking: number;
    goldRate: number;
    makingRate: number;
    taxRate:number;

  }[] = [];
  caretWiseSizes: {
    name: string;
    weight: number;
    variation: number;
    purity: number;
  }[] = [];
  taxForm: FormGroup = new FormGroup({
    makingRateType: new FormControl(),
    makingRate: new FormControl(),
  });
  ngOnInit() {
    this.getCategories();
    this.databaseService.getMaterials().then((materials) => {
      this.materials = materials.docs.map((material: any) => {
        return { id: material.id, ...material.data() };
      });
      this.filteredMaterials = this.materials;
      // this.generateVariants()
    });
  }

  getCategories() {
    this.databaseService.getCategories().then((res) => {
      this.categories = res.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      });
    });
  }

  setMaterial(material: string) {
    console.log(this.selectedMaterials);
    return !this.selectedMaterials.some((selectedMaterial) => {
      return selectedMaterial.name === material;
    });
  }

  addMaterial() {
    this.selectedMaterials.push({
      materials: this.materials,
      name: '',
      selectedVariants: [],
      selectedMaterial: undefined,
      makingRate: 0,
      perWeight: false,
    });
  }

  log(data: any) {
    console.log(data);
  }

  removeMaterial(index: number) {
    this.selectedMaterials.splice(index, 1);
  }

  removeImage(index: number) {
    this.productImages.splice(index, 1);
    this.productImageFiles.splice(index, 1);
    this.productImagesData.splice(index, 1);
  }

  addImages(event: any) {
    const files = event.target.files;
    // check if files are less than 1mb and are images
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 1000000) {
        alert('File size is too large');
        return;
      }
      if (!files[i].type.includes('image')) {
        alert('File is not an image');
        return;
      }
    }
    // add files to productImageFiles
    // add files to productImages
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.productImagesData.push(event.target.result);
      };
      reader.readAsDataURL(files[i]);
      this.productImageFiles.push(files[i]);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  async basicDetailSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.formStage = 1;
      try {
        await this.uploadImages();
        Notify.info('Images uploaded.', { zindex: 999999 });
        this.draftProduct = await this.databaseService.addProduct({
          ...this.productForm.value,
          images: this.productImages,
          date: new Date(),
        });
        Notify.info('Basic details saved.', { zindex: 999999 });
      } catch (error) {
        console.log(error);
        Notify.failure('Problem saving basic details.', { zindex: 999999 });
      }
      this.uploadPercent = 1;
      this.uploading = false;
      return true;
    } else {
      console.log('invalid form');
      alert('Invalid Form');
      return false;
    }
  }

  async uploadImages() {
    this.uploading = true;
    for (const imageFile of this.productImageFiles) {
      let res = await this.databaseService.upload(
        'products/images/' + this.generateId() + imageFile.name,
        imageFile
      );
      this.productImages.push(res);
      this.uploadPercent = Math.floor(
        (this.productImages.length / (this.productImageFiles.length + 1)) * 100
      );
    }
  }

  generateId() {
    return Math.floor(Math.random() * 100000000000000000);
  }

  changedVariant(material: SelectableMaterial, event: any) {
    console.log(event);
    let selectedVariants = JSON.parse(JSON.stringify(event.value));
    console.log(selectedVariants);
    selectedVariants.forEach((variant: NewVariant) => {
      if (!variant.quantity) {
        variant.quantity = 0;
      }
      variant.total = variant.quantity * variant.rate || 0;
    });
    material.selectedVariants = selectedVariants;
  }

  async generateVariants() {
    let currentMaterial = this.metalForm.value.metal;
    // currentMaterial.variants.forEach((variation:any)=>{
    //   variation.type = "goldPurity"
    // })
    let masterPurity = this.metalForm.value.masterPurity;
    this.caretWiseSizes = [];
    this.metalForm.value.purity.forEach((purity: any) => {
      purity.type = 'purity';
      let rate = this.dataProvider.goldSizeRates.find(
        (item) =>
          item.fromRatio == masterPurity.ratio && item.toRatio == purity.ratio
      );
      if (rate?.rate) {
        console.log('rate', rate);
        this.sizes.forEach((size) => {
          console.log('Rate', size.weight * rate!.rate, 'name', size.name);
          this.caretWiseSizes.push({
            ...size,
            weight: size.weight * rate!.rate,
            purity: rate!.toRatio,
          });
        });
      } else {
        console.log('Rate not found', purity, masterPurity);
      }
    });
    this.metalForm.value.color.forEach((color: any) => {
      color.type = 'color';
    });
    console.log('caretWiseSizes', this.caretWiseSizes);
    console.log('currentMaterial', currentMaterial);
    function getCombinations(arr: any[]) {
      if (arr.length === 0) return [[]];
      let [current, ...rest] = arr;
      let combinations = getCombinations(rest);
      console.log('bcombination', current);
      return current.variants.reduce(
        (a: any, variantObject: any) => [
          ...a,
          ...combinations.map((c: any) => [variantObject, ...c]),
        ],
        []
      );
    }
    this.finalCombinations = [];
    let localCombinations = getCombinations([
      ...this.diamonds,
      ...this.stones,
      { variants: this.sizes },
      { variants: this.metalForm.value.purity },
      { variants: this.metalForm.value.color },
    ]);
    localCombinations.forEach((element: any) => {
      this.finalCombinations.push({
        ...this.getTotal(element),
        variants: element,
      });
    });
    console.log('COMBINATIONS', this.finalCombinations);
    // check if metals are selected
    if (this.metalForm.value.metal) {
      // then group them by item.type == size
      let groupedMetals:any[] = []
      this.finalCombinations.forEach((combination: any) => {
        let size = combination.variants.find((variant: any) => variant.type == 'size')
        if (size) {
          let group = groupedMetals.find((group: any) => group.name == size.name)
          if (group) {
            group.variants.push(combination)
          } else {
            groupedMetals.push({
              name: size.name,
              variants: [combination]
            })
          }
        }
      })
      console.log('groupedMetals', groupedMetals)
      this.sizeGroupedCombinations = groupedMetals;
      // then group them by item.type == color
    }
  }

  calculatePricing() {}

  submit() {
    Notify.warning('This functionality is disabled.');
  }

  publishProduct() {
    this.databaseService
      .updateProduct(this.draftProduct!.id, {
        published: true,
        variants: this.generatedCombinations,
        publishDate: new Date(),
      })
      .then(() => {
        this.dialogRef.close();
        Notify.success(
          'Published ' + this.productForm.value.name + ' successfully',
          {
            zindex: 99999,
          }
        );
      })
      .catch((err) => {
        console.log(err);
        Notify.failure(
          'Some error occurred while publishing ' +
            this.productForm.value.name +
            ' product'
        );
      });
  }

  sumVariant(variant: NewVariant[]) {
    return variant.reduce((total, item) => {
      return total + item.total;
    }, 0);
  }

  setWeight() {
    this.sizes.forEach((data, index) => {
      data.weight = Number(this.metalForm.value.masterWeight) + data.variation;
    });
  }

  sumTaxes() {
    // add taxes rate
    return this.taxes.reduce((total, val) => {
      return total + val.cost;
    }, 0);
  }

  addVariation(size: any, variationQty: string, masterWeight: string) {
    console.log('masterWeight', masterWeight, size);
    size.variation =
      Math.round(
        (size.variation + Number(variationQty) + Number.EPSILON) * 100
      ) / 100;
    size.weight = Number(masterWeight) + size.variation;
  }

  subtractVariation(size: any, variationQty: string, masterWeight: string) {
    size.variation =
      Math.round(
        (size.variation - Number(variationQty) + Number.EPSILON) * 100
      ) / 100;
    size.weight = Number(masterWeight) + size.variation;
  }

  getTotal(data: any[]) {
    let total = 0;
    let totalWeight = 0;
    data.forEach((material: any) => {
      if (material.type == 'diamondType' || material.type == 'stoneType') {
        total += material.price;
        totalWeight += material.weight;
      }
    });
    let goldPrice = 0;
    let goldWeight = 0;
    let purity = data.find((data) => data.type == 'purity');
    let size = data.find((data) => data.type == 'size');
    var currentMetalRate = 0;
    console.log(this.caretWiseSizes);
    if (purity && size) {
      let result = this.caretWiseSizes.filter((data) => {
        return data.purity == purity.ratio && data.name == size.name;
      });
      console.log('purity', result);
      if (result.length > 0) {
        let currentMetal = this.databaseService.materials.find((value) => {
          return value.id == this.metalForm.value.metal.id;
        });
        // result[0].weight = (Math.round((result[0].weight) + Number.EPSILON) * 100) / 100
        console.log('currentMetal', currentMetal, result);
        if (currentMetal) {
          let currentRateVariant = currentMetal.variants.find(
            (data) => data.ratio == result[0].purity
          );
          console.log(
            'Current rate variant',
            currentRateVariant,
            result[0].weight
          );
          if (currentRateVariant) {
            total += result[0].weight * currentRateVariant.rate;
            goldPrice = result[0].weight * currentRateVariant.rate;
            currentMetalRate = currentRateVariant.rate
            goldWeight = result[0].weight;
            totalWeight += goldWeight;
          }
        }
      } else {
        console.log('Cannot calc', purity, size, total);
      }
    }
    console.log('totalWeight', totalWeight);

    var totalMaking = 0;
    if (this.taxForm.value.makingRateType == 'percentage') {
      totalMaking = (total / 100) * this.taxForm.value.makingRate;
    } else if (this.taxForm.value.makingRateType == 'perGram') {
      totalMaking = totalWeight * this.taxForm.value.makingRate;
    }
    let finalCost = Math.round(total + totalMaking);
    let totalTaxCost = this.taxes.reduce(
      (total, item) => (total += item.cost),
      0
    );
    let totalTax = (finalCost / 100) * totalTaxCost;
    finalCost = totalTax + finalCost;
    return {
      total: Math.round(finalCost),
      gold: Math.round(goldPrice),
      goldWeight: goldWeight,
      goldRate: currentMetalRate,
      weight: totalWeight,
      totalTax: totalTax,
      making: totalMaking,
      makingRate:this.taxForm.value.makingRate,
      taxRate:totalTaxCost,
      totalWithoutMaking: total,
    };
  }

  chooseSize(size:{ name: string; sizes: string[] }[]){
    console.log("size",size);
    const dialog = this.dialog.open(SelectSizeComponent,{data:size});
    dialog.closed.subscribe((data)=>{
      console.log("data sizes",data);
      let filteredData = data as { name: string; sizes: {size:string,selected:boolean}[] };
      let masterSize = filteredData.sizes.findIndex((size)=>size.size == this.metalForm.value.masterMetalSize)+1;
      let weightVariation = this.metalForm.value.masterVariation;
      let masterWeight = this.metalForm.value.masterWeight;
      if (this.sizes.length > 0 && !confirm("You already have some sizes. Do you want to overwrite it ?")){
        return
      }
      this.sizes = [];
      if (filteredData.sizes.length){
        let sizes = filteredData.sizes.map((size,index)=> {
          if(size.selected){
            return {size:size,index:index};
          } else {
            return null;
          }
        })
        sizes.forEach((size)=>{
          if(size){
            let newWeight = masterWeight + (((size.index+1) - masterSize) * weightVariation);
            newWeight = Math.round((newWeight + Number.EPSILON) * 100) / 100
            // size.size = newWeight;
            console.log("newWeight",newWeight);
            this.sizes.push({name:size.size.size,weight:newWeight,variation:((size.index+1) - masterSize) * weightVariation,type:"size"});
          }
        })
        console.log("newSizes",sizes,this.sizes);
      }
    })
  }
}
// extend material interface to add quantity
export interface SelectableMaterial {
  materials: Material[];
  name: string;
  selectedMaterial: Material | undefined;
  selectedVariants: NewVariant[];
  makingRate: number;
  perWeight: boolean;
}

export interface NewVariant extends Variant {
  quantity: number;
  total: number;
  materialName?: string;
  titleName?: string;
}


export interface JewellerySize {
    name: string;
    sizes:{ name: string; sizes: string[] }[];
}