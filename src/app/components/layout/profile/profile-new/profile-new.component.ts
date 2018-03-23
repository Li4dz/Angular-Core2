import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-new',
  templateUrl: './profile-new.component.html',
  styles: []
})
export class ProfileNewComponent  {

  header: string = "Nuevo Perfil";
  type: string = "new";
}
