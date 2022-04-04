import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseHobbitssServiceModule } from '../../secondary/infrastructure/firebase-hobbitss.service-module';
import { AddsHobbitsDtoPort } from '../../../application/ports/secondary/adds-hobbits.dto-port';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateEmployeeComponent],
  providers: [],
  exports: [CreateEmployeeComponent],
})
export class CreateEmployeeComponentModule {}
