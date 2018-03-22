import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [ CommonModule, NavbarRoutingModule],
  declarations: [ NavbarComponent ],
  exports : [ NavbarComponent ],
  providers : [ ]
})
export class NavbarModule { }
