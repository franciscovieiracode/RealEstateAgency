import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError  } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/realestate/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class RealEstateRestService {

  constructor(private http: HttpClient, router: Router) { }

  addRealEstate(description: any, location: any, neighborhoodDescription: string, price: number, agentCellphone:string, publishState:string): Observable<any>{
    return this.http.put<any>(endpoint+"addrealestate", new AddRealEstateModel(description,location,neighborhoodDescription,price,agentCellphone,publishState), httpOptions)
    .pipe(catchError(this.handleError))
  }



  private handleError(error: HttpErrorResponse){
    return throwError(error.status)
}
}

export class AddRealEstateModel{

  constructor(public description:any, public location:any, public neighborhoodDescription:string, public price:number, public agentCellphone:string, public publishState:string){}

}

