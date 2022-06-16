import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError  } from 'rxjs';
import { LoginStatusComponent } from '../auth/login/login-status/login-status.component';

const endpoint = 'http://localhost:3000/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthRestServiceService {

  constructor(private http: HttpClient, private router:Router) { }

  login(email: string, password:string): Observable<any>{
    return this.http.post<any>(endpoint+"login", new LoginModel( email, password))
    .pipe(catchError(this.handleError));
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/'])
  }

  register(name: string, email: string, cellphone: string, password: string, role:string) :  Observable<any>{
      return this.http.post<any>(endpoint+'register', new RegisterModel( name, email, cellphone, password, role))
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    return throwError(error.status)
}

}

export interface AuthRestModelResponse{

}


export class LoginModel{

  constructor(public email:string, public password:string){}

}

export class RegisterModel{

  constructor(public name:string, public email:string, public cellphone:string, public password:string, public role:string){}

}

  
