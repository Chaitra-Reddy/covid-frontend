import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../models/Color';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddColorServiceService {

  constructor(private http: HttpClient) { }

  addColor(color: Color) : Observable<any>
  {
    return this.http.post("http://localhost:8080/color/addColor",color);
  }

  getAllColors() : Observable<any>
  {
    return this.http.get("http://localhost:8080/color/getAllColors");
  }
}
