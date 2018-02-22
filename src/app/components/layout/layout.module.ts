import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidebarModule,
    NavbarModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
