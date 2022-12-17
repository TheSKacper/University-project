import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient)
  {}

  validateLogin(user: User){
		return this.http.post('http://localhost:5000/api/user/login',{
			email : user.email,
			password : user.password
		})
  }
}