import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbitsListComponent } from './hobbits-list.component';
import { FirebaseHobbitssServiceModule } from '../../secondary/infrastructure/firebase-hobbitss.service-module';

@NgModule({ imports: [CommonModule,FirebaseHobbitssServiceModule],
  	declarations: [HobbitsListComponent],
  	providers: [],
  	exports: [HobbitsListComponent] })
export class HobbitsListComponentModule {
}
