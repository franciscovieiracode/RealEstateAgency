import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginStatusComponent } from 'src/app/auth/login/login-status/login-status.component';

@Component({
  selector: 'app-detailed-home-dialog',
  templateUrl: './detailed-home-dialog.component.html',
  styleUrls: ['./detailed-home-dialog.component.css']
})
export class DetailedHomeDialogComponent implements OnInit{

  real :any



  constructor(public status:LoginStatusComponent,private dialogRef: MatDialogRef<DetailedHomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.real=data
      console.log(this.real);
      
    }
      
     

  ngOnInit(): void {
  }

}
