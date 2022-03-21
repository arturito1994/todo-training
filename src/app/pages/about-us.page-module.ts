import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { HobbitsListComponentModule } from '../../../projects/hobbici/src/lib/adapters/primary/ui/hobbits-list.component-module';
import { FirebaseHobbitssServiceModule } from '@hobbici';

@NgModule({ imports: [CommonModule,FirebaseHobbitssServiceModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  HobbitsListComponentModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
