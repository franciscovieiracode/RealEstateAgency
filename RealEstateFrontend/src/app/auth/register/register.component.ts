import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name: string;
email: string;
password: string;
passwordVer: string;

constructor(private router: Router) { 
  this.name=""
  this.email="";
  this.password="";
  this.passwordVer="";
}

  ngOnInit(): void {
  }

  register(){
    console.log(this.passwordVer);
    
  }

}
