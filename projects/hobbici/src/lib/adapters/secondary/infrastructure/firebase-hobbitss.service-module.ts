import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseHobbitssService } from './firebase-hobbitss.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseHobbitssService],
  	exports: [] })
export class FirebaseHobbitssServiceModule {
}
