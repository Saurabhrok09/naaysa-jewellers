import { Component} from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

interface avaliableCoupons {
   maximumDiscount: string,
   offerCode:string,
   offerType?: string,
   usage?: string,
   offerCost?: string,
   minPrice?: string,
   minProducts?: string,
   offerName: string
 }
@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styleUrls: ['./apply-coupon.component.scss']
})


export class ApplyCouponComponent {
  
   coupons: avaliableCoupons[] =[
    {
      maximumDiscount: '15',
      offerCode:'Naayasa 22',
      minPrice: '1 lakh',
      offerName: 'Diamond Studded jewellery'
    },
    {
      maximumDiscount: '3',
      offerCode:'Naayasa 3',
      minPrice: '2 lakh',
      offerName: 'Emerald Studded jewellery'
    }]


  constructor(private dialogRef: DialogRef) {}

   onClose(){
      this.dialogRef.close();
   }
}
