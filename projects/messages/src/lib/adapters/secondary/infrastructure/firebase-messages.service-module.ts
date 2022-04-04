import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessagesService } from './firebase-messages.service';
import { GETS_ALL_MESSAGES_DTO } from '../../../application/ports/secondary/gets-all-messages.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseMessagesService, { provide: GETS_ALL_MESSAGES_DTO, useExisting: FirebaseMessagesService }],
  	exports: [] })
export class FirebaseMessagesServiceModule {
}
