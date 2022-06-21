import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { description } from 'src/app/models/description';
import { location } from 'src/app/models/location';
import { RealEstateRestService } from 'src/app/services/real-estate-rest.service';


@Component({
  selector: 'app-edit-real-estate',
  templateUrl: './edit-real-estate.component.html',
  styleUrls: ['./edit-real-estate.component.css']
})
export class EditRealEstateComponent implements OnInit {

  id:string | undefined
  errorMessage:string | undefined

  typology:string
  sqFeet:number
  descriptionModel:any

  district:string
  city:string
  street:string
  cp:string
  locationModel:any

  neighborhoodDescription:string
  price:number
  agentCellphone:string
  publishState:string
  forSale:string

  constructor(private router: Router, private route: ActivatedRoute,private realEstateRest:RealEstateRestService) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];      
    });

    this.errorMessage=""
    this.typology=""
    this.sqFeet=0
    this.district=""
    this.city=""
    this.street=""
    this.cp=""
    this.neighborhoodDescription=""
    this.price=0
    this.publishState=""
    this.forSale =""
    this.agentCellphone=""
  }

  ngOnInit(): void {
  }

  editRealEstate(){
    
    this.descriptionModel = new description(this.typology,this.sqFeet)
    this.locationModel = new location(this.district, this.city, this.street,this.cp)    

    this.realEstateRest.editRealEstate(this.id,this.descriptionModel, this.locationModel, this.neighborhoodDescription,
      this.price, this.agentCellphone, this.publishState, this.forSale).subscribe((realEstate:any)=>{
      if(realEstate){
        alert("Sucessefully edited")
        this.router.navigate(['/'])
      }
    })

  }

}
