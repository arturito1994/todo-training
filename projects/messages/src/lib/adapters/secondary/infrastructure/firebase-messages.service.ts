import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllMessagesDtoPort } from '../../../application/ports/secondary/gets-all-messages.dto-port';
import { MessagesDTO } from '../../../application/ports/secondary/messages.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsMessagesDtoPort } from '../../../application/ports/secondary/adds-messages.dto-port';

@Injectable()
export class FirebaseMessagesService
  implements GetsAllMessagesDtoPort, AddsMessagesDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<MessagesDTO>): Observable<MessagesDTO[]> {
    return this._client
      .collection<MessagesDTO>('messages')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: MessagesDTO[]) => filterByCriterion(data, criterion)));
  }
  add(messages: Partial<MessagesDTO>): void {
    this._client.collection('messages').add(messages);
  }
}
