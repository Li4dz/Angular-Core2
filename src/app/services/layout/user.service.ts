import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { User } from "../../common/class/user.class";
import  "rxjs/Rx";

@Injectable()
export class UserService {
  private firebaseUrl = "https://angular-firebase-beb37.firebaseio.com";
  private users : User [] = [];
  
  constructor(private http : Http) { }

  getUserList(){
    let url = `${this.firebaseUrl}/users.json`;
    console.log(url);
    return this.http.get(url)
      .map(response => { return response.json(); })
  }

}
