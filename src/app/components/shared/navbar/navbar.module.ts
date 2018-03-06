import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from '../../../services/shared/navbar.service';

@NgModule({
  imports: [ CommonModule, NavbarRoutingModule],
  declarations: [ NavbarComponent ],
  exports : [ NavbarComponent ],
  providers : [ NavbarService ]
})
export class NavbarModule { }
