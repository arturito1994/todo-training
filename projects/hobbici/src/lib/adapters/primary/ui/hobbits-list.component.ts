import { Observable, of } from 'rxjs';
import { HobbitsDTO } from '../../../application/ports/secondary/hobbits.dto';
import { DepartmentDTO } from '../../../application/ports/secondary/department.dto';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  GETS_ALL_HOBBITS_DTO,
  GetsAllHobbitsDtoPort,
} from '../../../application/ports/secondary/gets-all-hobbits.dto-port';

@Component({
  selector: 'lib-hobbits-list',
  templateUrl: './hobbits-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbitsListComponent {
  zmiany$: Observable<HobbitsDTO[]> = this._getsAllHobbitsDto.getAll();
  constructor(
    @Inject(GETS_ALL_HOBBITS_DTO)
    private _getsAllHobbitsDto: GetsAllHobbitsDtoPort
  ) {}
}
