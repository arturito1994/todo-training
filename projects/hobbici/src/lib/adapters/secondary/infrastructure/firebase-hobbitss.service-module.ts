import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GETS_ALL_HOBBITS_DTO } from '../../../application/ports/secondary/gets-all-hobbits.dto-port';
import { FirebaseHobbitssService } from './firebase-hobbitss.service';
import { AddsHobbitsDtoPort, ADDS_HOBBITS_DTO } from '../../../application/ports/secondary/adds-hobbits.dto-port';
import { GETS_ONE_HOBBITS_DTO } from '../../../application/ports/secondary/gets-one-hobbits.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseHobbitssService,
		{ provide: GETS_ALL_HOBBITS_DTO, useExisting: FirebaseHobbitssService },
		{ provide: ADDS_HOBBITS_DTO, useExisting: FirebaseHobbitssService },
    { provide: GETS_ONE_HOBBITS_DTO, useExisting: FirebaseHobbitssService }
  ],
	exports: []
})
export class FirebaseHobbitssServiceModule {
}
