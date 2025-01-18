import { Timestamp } from "@angular/fire/firestore";
import { Material } from "../admin/materials/materials.component";
import { NewVariant, SelectableMaterial } from "../admin/products/add-product/add-product.component";

export interface Product {
    id?:string;
    averageRating:number;
    category:{id:string,name:string};
    date:Timestamp;
    description:string;
    images:string[];
    materials:SelectableMaterial[];
    name:string;
    price?:number;
    publishDate?:Date;
    published:boolean;
    variants:Combination[];
  }
export interface Combination{
  combination:NewVariant[],
  quantity:number,
  rate:number,
  total:number
}
export type Variant = {
    id?: string,
    name: string,
    rate: number,
    ratio: number,
  }

export type Category = {
    id?: string;
    name: string;
    image: string;
    description: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}