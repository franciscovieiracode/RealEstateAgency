import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { LoginStatusComponent } from './login-status/login-status.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage:string | undefined = undefined;


  constructor(private router: Router, private authService: AuthRestServiceService,public status: LoginStatusComponent) { 
    this.email="";
    this.password="";
  }

  ngOnInit(): void {
    if (this.status.checkIsLoggedIn())
      this.router.navigate(['/'])
  }

  login(): void{
    
    this.authService.login(this.email, this.password).subscribe((user : any)=>{
      if (user && user.auth == true) {
        localStorage.setItem('currentUser', JSON.stringify(user.token));
        this.router.navigate(['/']);
      
      }
    }, (Error)=>{
      if(Error == 401){
        this.errorMessage = "Wrong password"
      } 
      else if (Error == 404){
        this.errorMessage = "User does not exist"
      }     
      else{
        this.errorMessage = "Server error, please try again later"
      }
    })
  }

}
