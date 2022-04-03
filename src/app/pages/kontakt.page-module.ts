import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktPage } from './kontakt.page';
import { KontaktListComponentModule } from '../../../projects/hobbici/src/lib/adapters/primary/ui/kontakt-list.component-module';
import { ContactUsComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-us.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: KontaktPage,
      },
    ]),
    KontaktListComponentModule,
    ContactUsComponentModule
  ],
  declarations: [KontaktPage],
  providers: [],
  exports: [],
})
export class KontaktPageModule {}
