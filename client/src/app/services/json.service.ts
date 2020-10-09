import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService {

  constructor(private http: HttpClient) { }

  getJson(url: string){
    return this.http.get(url,{
      headers: {'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'http://localhost:4200'}
    });
  }
}
