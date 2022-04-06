import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailPage } from './employee-detail.page';
import { PracownicySzczegolyComponentModule } from '../../../projects/hobbici/src/lib/adapters/primary/ui/pracownicy-szczegoly.component-module';
import { FirebaseHobbitssServiceModule } from '../../../projects/hobbici/src/lib/adapters/secondary/infrastructure/firebase-hobbitss.service-module';
import { InMemoryContextStorageModule } from '@hobbici';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':hobbitId',
        component: EmployeeDetailPage,
      },
    ]),
    PracownicySzczegolyComponentModule,
    FirebaseHobbitssServiceModule,
    InMemoryContextStorageModule,
  ],
  declarations: [EmployeeDetailPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailPageModule {}
