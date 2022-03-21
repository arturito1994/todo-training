import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllHobbitsDtoPort } from '../../../application/ports/secondary/gets-all-hobbits.dto-port';
import { HobbitsDTO } from '../../../application/ports/secondary/hobbits.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseHobbitssService implements GetsAllHobbitsDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<HobbitsDTO>): Observable<HobbitsDTO[]> {
    return this._client
      .collection<HobbitsDTO>('hobbits-list')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: HobbitsDTO[]) => filterByCriterion(data, criterion)));
  }
}
