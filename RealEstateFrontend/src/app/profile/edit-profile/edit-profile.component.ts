import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileRestService } from 'src/app/services/profile-rest.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  localPreferences: string[];
  errorMessage:string | undefined = undefined;



  constructor(private router: Router, private profileService:ProfileRestService) {
    this.name=""
    this.email="";
    this.password="";
    this.cellphone="";
    this.localPreferences = new Array()
   }

  ngOnInit(): void {
  }

  update(){

    this.profileService.editProfile(this.name,this.email,this.cellphone,this.password,this.localPreferences).subscribe((user:any)=>{
      if(user){
        alert("Sucessfully updated")
        this.router.navigate(['/showprofile'])
      }
    })

  }
}
