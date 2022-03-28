import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateEmployeeComponentModule } from '../../../projects/hobbici/src/lib/adapters/primary/ui/create-employee.component-module';
import { FirebaseHobbitssServiceModule } from '@hobbici';
@NgModule({
  imports: [CommonModule, FirebaseHobbitssServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      }
    ]),
    CreateEmployeeComponentModule,
    FirebaseHobbitssServiceModule
  ],
  declarations: [AdminPage],
  providers: [],
  exports: []
})
export class AdminPageModule {
}
