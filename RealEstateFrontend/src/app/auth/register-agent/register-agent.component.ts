import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



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
  role: string;
  
  constructor(private router: Router) { 
    this.name=""
    this.email="";
    this.password="";
    this.cellphone="";
    this.role ="agent"
  }

  ngOnInit(): void {
  }

  register(){

  }

  registerAgent(){
    this.router.navigate(['/register'])
  }

}
