import { Component } from '@angular/core';
import { User } from "../../../common/class/user.class";
import { UserService } from '../../../services/layout/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent {
  private users : User [] = [];

  constructor(private userService : UserService) {
    this.showUserList();
   }

  showUserList(){
    this.userService.getUserList()
      .subscribe(data => this.users = data);
  }

}
