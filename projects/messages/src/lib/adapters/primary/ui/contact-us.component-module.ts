import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [ContactUsComponent],
  	providers: [],
  	exports: [ContactUsComponent] })
export class ContactUsComponentModule {
}
