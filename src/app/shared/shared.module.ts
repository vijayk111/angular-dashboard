import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { DataTableCardComponent } from './components/data-table-card/data-table-card.component';

@NgModule({
  declarations: [
    WidgetWrapperComponent,
    ChartCardComponent,
    DataTableCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    WidgetWrapperComponent,
    ChartCardComponent,
    DataTableCardComponent
  ]
})
export class SharedModule { }
