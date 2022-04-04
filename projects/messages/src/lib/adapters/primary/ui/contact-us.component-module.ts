import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseMessagesServiceModule } from '../../secondary/infrastructure/firebase-messages.service-module';
import { AddsMessagesDtoPort } from '../../../application/ports/secondary/adds-messages.dto-port';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ContactUsComponent],
  providers: [],
  exports: [ContactUsComponent],
})
export class ContactUsComponentModule {}
