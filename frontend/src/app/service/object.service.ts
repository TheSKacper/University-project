import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http:HttpClient) { }

  getObjects()
  {
    return this.http.get('http://localhost:5000/api/object')
  }

  createObject(object:any)
  {
    return this.http.post('http://localhost:5000/api/object',object)
  }

  deleteObject(_id:string)
  {
    return this.http.delete('http://localhost:5000/api/object'+ _id)
  }

  updateObject(object:any,_id:string)
  {
    return this.http.put('http://localhost:5000/api/object'+ _id,object)
  }

  getOneObject(_id:string)
  {
    return this.http.get('http://localhost:5000/api/object'+_id)
  }
}
