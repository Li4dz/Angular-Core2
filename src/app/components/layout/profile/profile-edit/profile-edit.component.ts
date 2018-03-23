import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styles: []
})
export class ProfileEditComponent  {
  header: string = "Editar Perfil";
  type: string = "edit";
  key: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe(params=> this.key = params['key']);
  }


}
