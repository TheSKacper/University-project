import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http:HttpClient) { }

  getALLProducer()
  {
    return this.http.get('http://localhost:5000/api/producer').pipe(map((res:any) =>
    {
      return res
    }))
  }
}
