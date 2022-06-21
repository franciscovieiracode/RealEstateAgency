import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileRestService } from 'src/app/services/profile-rest.service';

@Component({
  selector: 'app-add-rs-to-favorite-list',
  templateUrl: './add-rs-to-favorite-list.component.html',
  styleUrls: ['./add-rs-to-favorite-list.component.css']
})
export class AddRsToFavoriteListComponent implements OnInit {

  user:any

  constructor(private profileService: ProfileRestService, private router:Router) { 
  }

  ngOnInit(): void {
    this.profileService.showProfile().subscribe((user:any)=>{
      if(user){
        this.user = user.favoriteList;
      }
    })
  }

  removeRealEstateFromFavorites(i:number){
    this.user.splice(i,1)
    this.profileService.removeFromFavorites(this.user).subscribe((user:any)=>{
      if(user)
        alert("Removed with sucess")
    })
    this.router.navigate(['/favoriteList'])
  }
}
