import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isCorrect = false
  public user!:User
  userTest:any = []
  constructor(private userService:UserService) {
    this.user = new User()
   }

  ngOnInit(): void {

  }

  validateLogin() {
  	if(this.user.email && this.user.password) {
  		this.userService.validateLogin(this.user).subscribe(result => {
        
        console.log('result is ', result);
        this.userTest = result
        console.log(this.userTest)
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }

}
