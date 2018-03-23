import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators,FormArray } from "@angular/forms";
import { Observable } from 'rxjs/Observable';

import { Profile } from '../../../../common/class/profile';
import { ProfileService } from '../../../../services/layout/profile.service';
import { Notify } from '../../../../common/helpers/notify';
import { TypeModule } from '../../../../common/helpers/enum';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styles: []
})
export class ProfileFormComponent  implements OnInit {

  @Input() header: string;
  @Input() type: string;
  @Input() key: string;
 
  formProfile: FormGroup;
  private profile: Profile;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.formProfile = new FormGroup({ 
      'nombre' : new FormControl('', Validators.required),
      'descripcion' : new FormControl('')
    })

    if (this.type == TypeModule.Edit || this.type == TypeModule.Info ) {
      this.profileService.getProfile(this.key)
        .subscribe(data=> 
          { 
            this.profile = data;
            this.formProfile.setValue(this.profile);
          });
    }
  }

   getFormData(): Profile {
    let profile:Profile = new Profile();
    profile.nombre = this.formProfile.get('nombre').value;
    profile.descripcion = this.formProfile.get('descripcion').value;
    return profile;
  }
  
   saveProfile() {
    if(this.formProfile.valid) {

      let profile:Profile = this.getFormData();

      if(this.type == TypeModule.New) {
        this.newProfile(profile);
      } else if (this.type == TypeModule.Edit) {
        this.editProfile(profile, this.key);
      }
    }
   }

   newProfile(profile: Profile) {
    this.profileService.saveProfile(profile)
    .subscribe(data => { 
      Notify.successOperation();
      this.router.navigate(['/profile']);
    },
    error => {
      Notify.failedOperation();
    });
   }

   editProfile(profile: Profile, key$: string) {
    this.profileService.editProfile(profile, key$)
    .subscribe(data => { 
      Notify.successOperation();
      this.router.navigate(['/profile']);
    },
    error => {
      Notify.failedOperation();
    });
   }


}
