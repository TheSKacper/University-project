import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategory()
  {
    return this.http.get('http://localhost:5000/api/category')
  }

  createCategory(object:any)
  {
    return this.http.post('http://localhost:5000/api/category',object)
  }

  deleteCategory(_id:string)
  {
    return this.http.delete('http://localhost:5000/api/category'+ _id)
  }

  updateCategory(object:any,_id:string)
  {
    return this.http.put('http://localhost:5000/api/category'+ _id,object)
  }

  getOnCategory(_id:string)
  {
    return this.http.get('http://localhost:5000/api/category'+_id)
  }
}
