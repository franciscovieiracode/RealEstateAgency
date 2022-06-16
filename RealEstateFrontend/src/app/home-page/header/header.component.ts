import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { LoginStatusComponent } from 'src/app/auth/login/login-status/login-status.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private authService:AuthRestServiceService, public status: LoginStatusComponent) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
  
  register(){
    this.router.navigate(['/register'])
  }

  home(){
    this.router.navigate(['/'])
  }

  openDialog(){
    this.dialog.open(AboutComponentComponent)
  }

  logout(){
    this.authService.logout();
  }
  editProfile(){
    this.router.navigate(['editprofile'])
  }

  showProfile(){
    this.router.navigate(['/showprofile'])
  }
}
