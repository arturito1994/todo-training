import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HobbitsDTO } from './hobbits.dto';

export const GETS_ALL_HOBBITS_DTO = new InjectionToken<GetsAllHobbitsDtoPort>('GETS_ALL_HOBBITS_DTO');

export interface GetsAllHobbitsDtoPort {
  getAll(criterion?: Partial<HobbitsDTO>): Observable<HobbitsDTO[]>;
}
