import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarRoutingModule } from './sidebar-rounting.module';

@NgModule({
  imports: [ CommonModule, SidebarRoutingModule ],
  declarations: [ SidebarComponent ], 
  exports : [ SidebarComponent ]
})
export class SidebarModule { }
