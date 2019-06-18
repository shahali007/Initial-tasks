import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyJsonData } from './myJsonData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyJsonService {

  private myDataUrl = 'https://raw.githubusercontent.com/shahali007/MyJsonData/master/myjsondata.json';
  constructor(private http: HttpClient) { }

  getMyJsonData(): Observable<MyJsonData[]> {
    return this.http.get<MyJsonData[]>(this.myDataUrl);
  }
}
