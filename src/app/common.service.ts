import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  static getMoviewData() {
    throw new Error("Method not implemented.");
  }

  constructor(private _httpClient:HttpClient) { }

  public getMoviewData(key:string,url:string):Observable <any> {
      return this._httpClient.get(key+"?"+url);
  }

  public getMoviewGeneries(key:string,url:string):Observable <any> {
      return this._httpClient.get(key+"?"+url);
  }
}
