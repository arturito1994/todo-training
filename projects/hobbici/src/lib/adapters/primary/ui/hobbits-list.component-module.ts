import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbitsListComponent } from './hobbits-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [HobbitsListComponent],
  	providers: [],
  	exports: [HobbitsListComponent] })
export class HobbitsListComponentModule {
}
