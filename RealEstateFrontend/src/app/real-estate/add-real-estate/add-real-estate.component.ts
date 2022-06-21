import { Component, OnInit } from '@angular/core';
import { ProfileRestService } from 'src/app/services/profile-rest.service';
import { RealEstateRestService } from 'src/app/services/real-estate-rest.service';
import { description } from 'src/app/models/description';
import {location} from 'src/app/models/location'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-real-estate',
  templateUrl: './add-real-estate.component.html',
  styleUrls: ['./add-real-estate.component.css']
})
export class AddRealEstateComponent implements OnInit {

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
  agentCellphone:any
  publishState:string

  fileName = '';
  message = '';
  title = '';


  errorMessage:string

  constructor(private getAgentCellPhoneRest:ProfileRestService, private realEstateRest:RealEstateRestService, private route:Router) {
    this.errorMessage=""
    this.typology=""
    this.sqFeet=0
    this.district=""
    this.city=""
    this.street=""
    this.cp=""
    this.neighborhoodDescription=""
    this.price=0
    this.publishState="notPublished"
    this.getAgentCellPhone()
   }

  ngOnInit(): void {
  }

  
  addRealEstate(){
    this.descriptionModel = new description(this.typology,this.sqFeet)
    this.locationModel = new location(this.district, this.city, this.street,this.cp)
    
    this.realEstateRest.addRealEstate(this.descriptionModel, this.locationModel, this.neighborhoodDescription,
      this.price, this.agentCellphone, this.publishState).subscribe((realEstate:any)=>{
      if(realEstate){
        alert("Sucessefully added")
        this.route.navigate(['/'])
      }
    })
  }


  getAgentCellPhone(){
    this.getAgentCellPhoneRest.showProfile().subscribe((user : any)=>{
      if (user && user.cellphone) {
        this.agentCellphone = user.cellphone
      }
    })    
  }
}
