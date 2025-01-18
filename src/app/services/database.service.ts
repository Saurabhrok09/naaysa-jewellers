import { Injectable } from '@angular/core';
import { collectionData, Firestore, updateDoc } from '@angular/fire/firestore';
import { ref, uploadBytesResumable, getDownloadURL, Storage } from '@angular/fire/storage';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from '@firebase/firestore';
import { Subject } from 'rxjs';
import { Variant } from 'src/app/structures/product.structure';
import { Material } from '../admin/materials/materials.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  variantUpdated:Subject<Variant[]> = new Subject();
  materials:Material[] = []
  variants:Variant[] = []
  constructor(private fs:Firestore,private storage:Storage) {
    collectionData(collection(this.fs,'materials'),{idField:'id'}).subscribe((data:any)=>{
      console.log("got data",data);
      this.materials = data;
      this.variants = []
      for (const iterator of this.materials) {
        if (iterator.variants && iterator.variants.length > 0){
          console.log(iterator.variants.length);
          this.variants.push(...iterator.variants)
        }
        console.log("materials",this.materials);
        this.variantUpdated.next(this.variants)
      }
    })
  }

  async upload(
    path: string,
    file: File | ArrayBuffer | Blob | Uint8Array
  ): Promise<any> {
    // const ext = file!.name.split('.').pop();
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    } else {
      // handle invalid file
      return false;
    }
  }

  getCategories(){
    return getDocs(collection(this.fs,'categories'))
  }

  addCategory(category:any){
    return addDoc(collection(this.fs,'categories'), category)
  }

  deleteCategory(id:string){
    return deleteDoc(doc(this.fs, 'categories', id))
  }

  addProduct(product:any){
    return addDoc(collection(this.fs,'products'), product)
  }

  getProducts(){
    return getDocs(collection(this.fs,'products'))
  }

  updateProduct(productId:string,newData:any){
    return updateDoc(doc(this.fs, 'products', productId), newData)
  }

  getMaterials(){
    return getDocs(collection(this.fs,'materials'))
  }

  getMaterial(materialId:string){
    getDoc(doc(this.fs,'materials/'+materialId))
  }
  
  addMaterial(material:any){
    return addDoc(collection(this.fs,'materials'), material)
  }

  deleteMaterial(id:string){
    return deleteDoc(doc(this.fs, 'materials', id))
  }

  async checkForPriceUpdate() {
    let today = (new Date()).toISOString().split('T')[0]
    let res = await getDoc(doc(this.fs, 'priceUpdate', today))
    return res.exists()
  }

  updateMaterial(id:string,variants:Variant[]){
    return updateDoc(doc(this.fs, 'materials', id), {variants:variants})
  }
}
