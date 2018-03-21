import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from '../../../services/layout/user.service';
import { KeysPipe } from '../../../common/pipes/keys.pipe';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SelectModule
  ],
  declarations: [ UserComponent, KeysPipe],
  providers : [ UserService ]
})
export class UserModule { }
