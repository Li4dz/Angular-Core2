import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileNewRoutingModule } from './profile-new-routing.module';
import { ProfileNewComponent } from './profile-new.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileNewRoutingModule
  ],
  declarations: [ ProfileNewComponent ]
})
export class ProfileNewModule { }
