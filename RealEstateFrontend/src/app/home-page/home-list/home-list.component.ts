import { Component, OnInit } from '@angular/core';
import { RealEstateRestService } from 'src/app/services/real-estate-rest.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { DetailedHomeDialogComponent } from './detailed-home-dialog/detailed-home-dialog.component';
import { LoginStatusComponent } from 'src/app/auth/login/login-status/login-status.component';
import { ProfileRestService } from 'src/app/services/profile-rest.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  realestate:any
  search:string

  constructor(private router: Router, private realEstateService: RealEstateRestService,public dialog: MatDialog
    ,public status:LoginStatusComponent,private profileService: ProfileRestService) {
      this.search=""
   }

  ngOnInit(): void {
    this.realEstateService.getRealEstate().subscribe((realEstate:any)=>{
      if (realEstate.lenght !=0){
        this.realestate = realEstate
      }
    }
  )}

    addToFavorite(real:any){      
      this.profileService.addToFavoritesList(real).subscribe(()=>{
      }
    )}

    checkFullInfo(real:any){      

      const dialogConfig = new MatDialogConfig();
        dialogConfig.data = real;

    this.dialog.open(DetailedHomeDialogComponent, dialogConfig);
    }

    redirectToLogin(){
      this.router.navigate(['/login'])
    }

}
