import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthRestServiceService) { 
    this.email="";
    this.password="";
  }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.login(this.email, this.password).subscribe((user : any)=>{
      if (user && user.auth == true) {
        localStorage.setItem('currentUser', JSON.stringify(user.token));
        this.router.navigate(['/']);
        console.log(user);
        alert(user.message)
      } else {
        alert(user.message);
      }
    })
  }





}
