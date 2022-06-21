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
    return this.http.post<any>(endpoint+"addrealestate", new AddRealEstateModel(description,location,neighborhoodDescription,price,agentCellphone,publishState), httpOptions)
    .pipe(catchError(this.handleError))
  }

  getRealEstate(): Observable<any>{
    return this.http.get<any>(endpoint+"getrealestate", httpOptions).pipe(catchError(this.handleError))
  }


  editRealEstate(id:any,description: any, location: any, neighborhoodDescription: string, price: number, agentCellphone:string, publishState:string, forSale: string): Observable<any>{
    return this.http.put<any>(endpoint+"editrealestate/:id", new EditRealEstateModel(id,description, location, neighborhoodDescription, price, agentCellphone, publishState, forSale), httpOptions)
    .pipe(catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse){
    return throwError(error.status)
}
}

export class AddRealEstateModel{

  constructor(public description:any, public location:any, public neighborhoodDescription:string, public price:number, public agentCellphone:string, public publishState:string){}

}

export class EditRealEstateModel{

  constructor(public id:any ,public description:any, public location:any, public neighborhoodDescription:string, public price:number, public agentCellphone:string, public publishState:string, public forSale:string){}

}

