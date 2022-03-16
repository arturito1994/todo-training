import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownicyPage } from './pracownicy.page';
import { PracownicySzczegolyComponentModule } from '../../../projects/hobbici/src/lib/adapters/primary/ui/pracownicy-szczegoly.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: PracownicyPage,
        }
      ]),
  PracownicySzczegolyComponentModule,
],
  	declarations: [PracownicyPage],
  	providers: [],
  	exports: [] })
export class PracownicyPageModule {
}
