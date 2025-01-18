import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent {
  constructor(private dialogRef: DialogRef) {}

  onClose(){
    // close icon should
     this.dialogRef.close();
  }
}
