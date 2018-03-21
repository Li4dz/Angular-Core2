import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SelectModule
  ],
  declarations: [ ProfileComponent ],
  providers : [  ]
})
export class ProfileModule { }
