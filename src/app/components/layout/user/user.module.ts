import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from '../../../services/layout/user.service';
import { SelectModule } from 'ng2-select';
import { PipesModule } from '../../../common/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SelectModule,
    PipesModule
  ],
  declarations: [ UserComponent],
  providers : [ UserService ]
})
export class UserModule { }
