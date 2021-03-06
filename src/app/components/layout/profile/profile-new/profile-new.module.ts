import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileNewRoutingModule } from './profile-new-routing.module';
import { ProfileNewComponent } from './profile-new.component';
import { ProfileService } from '../../../../services/layout/profile.service';
import { ProfileFormModule } from '../profile-form/profile-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileNewRoutingModule,
    ProfileFormModule
  ],
  declarations: [ ProfileNewComponent ],
  providers : [ ProfileService ]
})
export class ProfileNewModule { }
