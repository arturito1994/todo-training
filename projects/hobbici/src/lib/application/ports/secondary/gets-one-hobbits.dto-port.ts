import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HobbitsDTO } from './hobbits.dto';

export const GETS_ONE_HOBBITS_DTO = new InjectionToken<GetsOneHobbitsDtoPort>(
  'GETS_ONE_HOBBITS_DTO'
);

export interface GetsOneHobbitsDtoPort {
  getOne(id: string): Observable<HobbitsDTO>;
}
