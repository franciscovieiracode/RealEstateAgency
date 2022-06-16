import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name: string;
email: string;
password: string;
cellphone: string;
role: string ="client";
errorMessage:string | undefined = undefined;


constructor(private router: Router, private authService: AuthRestServiceService) { 
  this.name=""
  this.email="";
  this.password="";
  this.cellphone="";
}

  ngOnInit(): void {
  }

  register(): void{
  
    this.authService.register(this.name,this.email,this.cellphone,this.password,this.role).subscribe((user : any)=>{
      
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user.token));
        this.router.navigate(['/']);
      }
     
    }, (Error)=>{
      if(Error == 500){
        this.errorMessage = "Either email or phone are already registered or please comeback later"
      }
      })
  }


  registerAgent(){
    this.router.navigate(['/registerAgent'])
  }

}
