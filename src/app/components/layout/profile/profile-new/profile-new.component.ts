import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../../../common/class/profile';
import { ProfileService } from '../../../../services/layout/profile.service';

@Component({
  selector: 'app-profile-new',
  templateUrl: './profile-new.component.html',
  styles: []
})
export class ProfileNewComponent  {

  header: string = "Nuevo Perfil"
  formProfile: FormGroup;

  profile:Profile = {
    nombre : 'Admin',
    descripcion: 'Super Usuario'
  }

  constructor(private profileService: ProfileService ) {
      this.formProfile = new FormGroup({ 
        'nombre' : new FormControl('', Validators.required),
        'descripcion' : new FormControl('')
      })
      // console.log(this.formProfile);
      // this.formProfile.setValue(this.profile);
   }

   saveProfile() {
    // console.log(this.formProfile);
    if(this.formProfile.valid) {
      // console.log('VALID');
      let profile:Profile = new Profile();
      profile.nombre = this.formProfile.get('nombre').value;
      profile.descripcion = this.formProfile.get('descripcion').value;

      this.profileService.saveProfile(profile)
        .subscribe(data => { console.log(data); },
        error => console.error(error));
    }

    

    //  console.log('save');
    //  console.log(this.formProfile);
    //  console.log(this.formProfile.value);
    //  let nombre = this.formProfile.get('nombre').value;
    //  console.log(nombre);
   }



}
