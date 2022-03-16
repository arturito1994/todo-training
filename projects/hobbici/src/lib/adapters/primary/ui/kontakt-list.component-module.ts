import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontaktListComponent } from './kontakt-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule],
  	declarations: [KontaktListComponent],
  	providers: [],
  	exports: [KontaktListComponent] })
export class KontaktListComponentModule {
}
