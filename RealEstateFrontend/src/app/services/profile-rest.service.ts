import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError  } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/profile/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProfileRestService {

  constructor(private http: HttpClient, private router:Router) { }

  showProfile(): Observable<any>{
    return this.http.get<any>(endpoint+"showprofile/:id",httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteProfile(): Observable<any>{
    return this.http.delete<any>(endpoint+"deleteprofile/:id",httpOptions)
    .pipe(catchError(this.handleError));
  }

  editProfile(name: string, email: string, cellphone: string, password: string, localPreferences:string[]): Observable<any>{
    return this.http.put<any>(endpoint+"editprofile/:id", new EditProfileModel(name,email,cellphone,password,localPreferences), httpOptions)
    .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    return throwError(error.status)
}
}

export class EditProfileModel{

  constructor(public name:string, public email:string, public cellphone:string, public password:string, public localPreferences:string[]){}

}
