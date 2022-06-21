import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstateRestService } from 'src/app/services/real-estate-rest.service';

@Component({
  selector: 'app-show-all-real-estate',
  templateUrl: './show-all-real-estate.component.html',
  styleUrls: ['./show-all-real-estate.component.css']
})
export class ShowAllRealEstateComponent implements OnInit {

  realestate:any
  search:string

  constructor(private router: Router, private realEstateService: RealEstateRestService) {
      this.search=""
   }

  ngOnInit(): void {
    this.realEstateService.getRealEstate().subscribe((realEstate:any)=>{
      if (realEstate.lenght !=0){
        this.realestate = realEstate
      }
    }
  )}

  editRealEstate(_id:string){
    const queryParams = { id: _id };
    this.router.navigate(['/editrealestate'], {queryParams: queryParams})
  }

}
