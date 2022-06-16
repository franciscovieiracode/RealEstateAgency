import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { ProfileRestService } from 'src/app/services/profile-rest.service';


@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  user:any

  constructor(private router: Router, private profileService: ProfileRestService, private authService: AuthRestServiceService) { 
  }

  ngOnInit(): void {
    this.profileService.showProfile().subscribe((user : any)=>{
      if (user) {
        this.user = user
      }
    })  
  }

  editProfile(){
    this.router.navigate(['/editprofile'])
  }

  deleteProfile(){
    this.profileService.deleteProfile().subscribe((user : any)=>{
      if(user.deletedCount == 1){
        alert("User deleted sucessefully")
        this.authService.logout()
      }
    })
  }

}
