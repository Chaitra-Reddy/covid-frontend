import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../models/Zone';

@Injectable({
  providedIn: 'root'
})
export class AddZoneServiceService {

  constructor(private http: HttpClient) { }

  addZone(map: any) : Observable<any>
  {
    let obj = {
      zoneName: map.get('zoneName'),
      zonePop: map.get('zonePop'),
      colorName: map.get('colorName')
    };

    return this.http.post("http://localhost:8080/zone/addZone",obj);
  }

  updateZone(map: any) : Observable<any>
  {
    let obj = {
      zoneId: map.get('zoneId'),
      zonePop: map.get('zonePop'),
      colorName: map.get('colorName')
    };

    return this.http.put("http://localhost:8080/zone/updateZone",obj);
  }

  deleteZone(id: number) : Observable<any>
  {
    return this.http.delete("http://localhost:8080/zone/deleteZone/" + id);
  }

  getZone(id: number) : Observable<any>
  {
    return this.http.get("http://localhost:8080/zone/getZone/" + id);
  }
}
