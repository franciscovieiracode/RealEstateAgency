import { Component, OnInit } from '@angular/core';
import { ProfileRestService } from 'src/app/services/profile-rest.service';

@Component({
  selector: 'app-add-real-estate',
  templateUrl: './add-real-estate.component.html',
  styleUrls: ['./add-real-estate.component.css']
})
export class AddRealEstateComponent implements OnInit {

  typology:string
  sqFeet:number

  district:string
  city:string
  street:string
  cp:string

  neighborhoodDescription:string
  price:number
  agentCellphone:string
  publishState:string

  fileName = '';
  message = '';
  title = '';


  errorMessage:string

  constructor(private getAgentCellPhoneRest:ProfileRestService) {
    this.errorMessage=""
    this.typology=""
    this.sqFeet=0
    this.district=""
    this.city=""
    this.street=""
    this.cp=""
    this.neighborhoodDescription=""
    this.price=0
    this.agentCellphone = this.getAgentCellPhone()
    this.publishState="notPublished"
   }

  ngOnInit(): void {
  }

  addRealEstate(){
    
  }


  getAgentCellPhone():string{

    let cell = ""

    this.getAgentCellPhoneRest.showProfile().subscribe((user:any)=>{
      if(user)
        cell = user.cellphone
    })

    return cell
  }
}
