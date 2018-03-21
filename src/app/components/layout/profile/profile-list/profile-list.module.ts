import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListRoutingModule } from './profile-list-routing.module';
import { ProfileListComponent } from './profile-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileListComponent
  ],
  declarations: [ ProfileListComponent ]
})
export class ProfileListModule { }
