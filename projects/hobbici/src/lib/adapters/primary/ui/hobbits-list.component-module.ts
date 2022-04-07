import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbitsListComponent } from './hobbits-list.component';
import { FirebaseHobbitssServiceModule } from '../../secondary/infrastructure/firebase-hobbitss.service-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FirebaseHobbitssServiceModule, RouterModule],
  declarations: [HobbitsListComponent],
  providers: [],
  exports: [HobbitsListComponent],
})
export class HobbitsListComponentModule {}
