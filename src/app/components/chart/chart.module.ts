import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ ChartComponent ],
  exports : [ ChartComponent ]
})
export class ChartModule { }
