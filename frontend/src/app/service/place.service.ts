import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }


  getAllPlace()
  {
    return this.http.get('http://localhost:5000/api/place').pipe(map((res:any) =>
    {
      return res
    }))
  }
}
