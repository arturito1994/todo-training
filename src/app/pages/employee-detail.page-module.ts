import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailPage } from './employee-detail.page';
import { PracownicySzczegolyComponentModule } from '../../../projects/hobbici/src/lib/adapters/primary/ui/pracownicy-szczegoly.component-module';
import { FirebaseHobbitssServiceModule } from '../../../projects/hobbici/src/lib/adapters/secondary/infrastructure/firebase-hobbitss.service-module';
import { HobbitsIdResolverModule } from '@hobbici';
import { HobbitsIdResolver } from 'projects/hobbici/src/lib/adapters/primary/ui/hobbits-id.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':hobbitId',
        component: EmployeeDetailPage,
        resolve: {
          hobbitId: HobbitsIdResolver,
        },
      },
    ]),
    PracownicySzczegolyComponentModule,
    FirebaseHobbitssServiceModule,
    HobbitsIdResolverModule,
  ],
  declarations: [EmployeeDetailPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailPageModule {}
