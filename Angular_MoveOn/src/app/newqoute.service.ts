import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewqouteService {

  constructor(public http:HttpClient) { }

  addqoute(newqoute:any) {
    return this.http.post('http://localhost:8898/insertqoute', newqoute);
  }

  applicationnum() {
    return this.http.get<any>('http://localhost:8898/lastone');
  }

}
