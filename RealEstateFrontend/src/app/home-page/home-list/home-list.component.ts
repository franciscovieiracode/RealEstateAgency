import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RealEstateRestService } from 'src/app/services/real-estate-rest.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { DetailedHomeDialogComponent } from './detailed-home-dialog/detailed-home-dialog.component';
import { LoginStatusComponent } from 'src/app/auth/login/login-status/login-status.component';
import { ProfileRestService } from 'src/app/services/profile-rest.service';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  realestate:any | undefined


  constructor(private router: Router, private realEstateService: RealEstateRestService,public dialog: MatDialog
    ,public status:LoginStatusComponent,private profileService: ProfileRestService) {
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

    editRealEstate(_id:string){
      const queryParams = { id: _id };
      this.router.navigate(['/editrealestate'], {queryParams: queryParams})
    }

    redirectToLogin(){
      this.router.navigate(['/login'])
    }

}
