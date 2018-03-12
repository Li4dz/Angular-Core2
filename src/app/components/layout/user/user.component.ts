import { Component } from '@angular/core';
import { User } from "../../../common/class/user.class";
import { UserService } from '../../../services/layout/user.service';
import { TestService } from '../../../services/shared/test.service';
import { Test } from '../test.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent {
  private users : User [] = [];

  constructor(private userService : UserService, private testService: TestService) {
    this.showUserList();
   }

  showUserList(){
    this.userService.getUserList()
      .subscribe(data => this.users = data);
  }

}
