import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontaktListComponent } from './kontakt-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [KontaktListComponent],
  	providers: [],
  	exports: [KontaktListComponent] })
export class KontaktListComponentModule {
}
