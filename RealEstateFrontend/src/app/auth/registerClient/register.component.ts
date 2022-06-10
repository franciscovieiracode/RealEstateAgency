import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';


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
role: string;

constructor(private router: Router, private authService: AuthRestServiceService) { 
  this.name=""
  this.email="";
  this.password="";
  this.cellphone="";
  this.role="client"
}

  ngOnInit(): void {
  }

  register(): void{
    

    this.authService.register(this.name,this.email,this.cellphone,this.password).subscribe((user : any)=>{
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        this.router.navigate(['/']);
      } 
    })
  }


  registerAgent(){
    this.router.navigate(['/registerAgent'])
  }

}
