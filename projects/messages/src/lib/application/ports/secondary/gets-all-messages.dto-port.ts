import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesDTO } from './messages.dto';

export const GETS_ALL_MESSAGES_DTO = new InjectionToken<GetsAllMessagesDtoPort>('GETS_ALL_MESSAGES_DTO');

export interface GetsAllMessagesDtoPort {
  getAll(criterion?: Partial<MessagesDTO>): Observable<MessagesDTO[]>;
}
