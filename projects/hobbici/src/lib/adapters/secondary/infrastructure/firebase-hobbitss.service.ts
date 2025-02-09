import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllHobbitsDtoPort } from '../../../application/ports/secondary/gets-all-hobbits.dto-port';
import { HobbitsDTO } from '../../../application/ports/secondary/hobbits.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsHobbitsDtoPort } from '../../../application/ports/secondary/adds-hobbits.dto-port';
import { GetsOneHobbitsDtoPort } from '../../../application/ports/secondary/gets-one-hobbits.dto-port';

@Injectable()
export class FirebaseHobbitssService
  implements GetsAllHobbitsDtoPort, AddsHobbitsDtoPort, GetsOneHobbitsDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<HobbitsDTO>): Observable<HobbitsDTO[]> {
    return this._client
      .collection<HobbitsDTO>('hobbits-list')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: HobbitsDTO[]) => filterByCriterion(data, criterion)));
  }
  add(hobbits: Partial<HobbitsDTO>): void {
    this._client.collection('hobbits-list').add(hobbits);
  }

  getOne(id: string): Observable<HobbitsDTO> {
    return this._client
      .doc<HobbitsDTO>('hobbits-list/' + id)
      .valueChanges({ idField: 'id' });
  }
}
