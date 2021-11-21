import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllqouteService {

  constructor(private http:HttpClient) { }

  getallData()
  {
    let url="http://localhost:8898/allqoute";
    return this.http.get(url);
  }
  getdomesticData()
  {
    let url="http://localhost:8898/qoute/domestic";
    return this.http.get(url);
  }
  getinternationalData()
  {
    let url="http://localhost:8898/qoute/international";
    return this.http.get(url);
  }

}
