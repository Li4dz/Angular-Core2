import { Component } from '@angular/core';
import { ProfileService } from '../../../services/layout/profile.service';
import { Profile } from 'selenium-webdriver/firefox';
import { Notify } from '../../../common/helpers/notify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent  {

  private profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {
    this.showProfileList();
   }

  showProfileList() {
    this.profileService.getProfileList()
      .subscribe(data=> this.profiles = data);
  }

  deleteProfile(key$: string){
    this.profileService.deleteProfile(key$)
      .subscribe(data=> {
        Notify.successOperation();
        this.showProfileList();
      }, error => {
        Notify.failedOperation();
      })
  }
}
