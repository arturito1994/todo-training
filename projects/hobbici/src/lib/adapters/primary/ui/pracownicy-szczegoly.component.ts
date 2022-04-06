import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HobbitsDTO } from '../../../application/ports/secondary/hobbits.dto';
import {
  GETS_ONE_HOBBITS_DTO,
  GetsOneHobbitsDtoPort,
} from '../../../application/ports/secondary/gets-one-hobbits.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';

@Component({
  selector: 'lib-pracownicy-szczegoly',
  templateUrl: './pracownicy-szczegoly.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracownicySzczegolyComponent {
  hobbit$: Observable<HobbitsDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsOneHobbitsDto.getOne(data.hobbitId)
      )
    );

  constructor(
    @Inject(GETS_ONE_HOBBITS_DTO)
    private _getsOneHobbitsDto: GetsOneHobbitsDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
