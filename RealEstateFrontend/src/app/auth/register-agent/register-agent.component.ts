import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';



@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  cellphone: string;
  role: string = "agent";
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
          console.log(user);
          this.router.navigate(['/']);
        }
       
      }, (Error)=>{
        if(Error == 500){
          this.errorMessage = "Either email or phone are already registered or please comeback later"
        }
        })
    }
  
  
    registerAgent(){
      this.router.navigate(['/register'])
    }
  
  }
  