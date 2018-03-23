import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileService } from '../../../../services/layout/profile.service';
import { ProfileFormModule } from '../profile-form/profile-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileEditRoutingModule,
    ProfileFormModule
  ],
  declarations: [ ProfileEditComponent ],
  providers : [ ProfileService ]
})
export class ProfileEditModule { }
