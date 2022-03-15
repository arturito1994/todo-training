import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailPage } from './employee-detail.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeeDetailPage,
        }
      ])],
  	declarations: [EmployeeDetailPage],
  	providers: [],
  	exports: [] })
export class EmployeeDetailPageModule {
}
