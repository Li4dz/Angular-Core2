import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarRoutingModule } from './sidebar-rounting.module';
import { FilterMenuPipe } from '../../../common/pipes/filter-menu.pipe';

@NgModule({
  imports: [ CommonModule, SidebarRoutingModule ],
  declarations: [ SidebarComponent, FilterMenuPipe ], 
  exports : [ SidebarComponent ]
})
export class SidebarModule { }
