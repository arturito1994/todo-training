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

@Component({
  selector: 'lib-pracownicy-szczegoly',
  templateUrl: './pracownicy-szczegoly.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracownicySzczegolyComponent {
  hobbit$: Observable<HobbitsDTO> = this._getsOneHobbitsDto.getOne(
    'i8RFU3Se9LI1hxodUpcL'
  );

  constructor(
    @Inject(GETS_ONE_HOBBITS_DTO)
    private _getsOneHobbitsDto: GetsOneHobbitsDtoPort
  ) {}
}
