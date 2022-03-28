import { InjectionToken } from '@angular/core';
import { HobbitsDTO } from './hobbits.dto';

export const ADDS_HOBBITS_DTO = new InjectionToken<AddsHobbitsDtoPort>('ADDS_HOBBITS_DTO');

export interface AddsHobbitsDtoPort {
  add(hobbits: Partial<HobbitsDTO>): void;
}
