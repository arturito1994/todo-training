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
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';

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
    private _getsAllHobbitsDto: GetsAllHobbitsDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onHobbitsClicked(hobbits: HobbitsDTO): void {
    this._contextDtoStorage.next({ hobbitId: hobbits.id });
  }
}
