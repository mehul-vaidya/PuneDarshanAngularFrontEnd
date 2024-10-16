// src/app/services/tourist-place.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristPlace } from '../models/tourist-place.model';
import { TouristPlaceUpdate } from '../models/tourist-place-update.model';
import { TouristPlaceDelete } from '../models/tourist-place-delete.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class TouristPlaceService {
  private apiUrl = 'http://localhost:8080/places';
  private apiUrlAdmin = 'http://localhost:8080/private/places';

  constructor(private http: HttpClient) {}

  getPlaces(): Observable<TouristPlace[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<TouristPlace[]>(this.apiUrl, { headers });
  }

  updatePlace(updatePlace : TouristPlaceUpdate): Observable<any>{
    const headers = new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
      //console.log(updatePlace);
      //console.log(headers)

    return this.http.post<TouristPlace>(this.apiUrlAdmin,updatePlace,{ headers });
  }

  /*
  deletePlace(deletePlace : TouristPlaceDelete): Observable<any>{
      const headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          });
        //console.log(deletePlace.get('placenameDelete'));
        //console.log(headers)
        this.apiUrlAdmin += "/";
        this.apiUrlAdmin += "/";
      return this.http.delete<TouristPlace>(this.apiUrlAdmin,{headers});
    }
  */

  deletePlace(placename: string): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      const url = `${this.apiUrlAdmin}/${placename}`; // DELETE request for a specific place
      return this.http.delete<Response>(url, { headers});
    }
}
