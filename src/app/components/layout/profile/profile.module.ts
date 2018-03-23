import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SelectModule } from 'ng2-select';
import { PipesModule } from '../../../common/pipes/pipes.module';
import { ProfileService } from '../../../services/layout/profile.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SelectModule,
    PipesModule
  ],
  declarations: [ ProfileComponent ],
  providers : [ ProfileService  ]
})
export class ProfileModule { }
