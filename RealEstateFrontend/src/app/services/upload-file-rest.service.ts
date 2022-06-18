import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/addrealestate/';

@Injectable({
  providedIn: 'root'
})
export class UploadFileRestService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<any>(endpoint + 'file', formData);
  }

}
