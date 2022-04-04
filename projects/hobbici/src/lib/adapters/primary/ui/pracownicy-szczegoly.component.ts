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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-pracownicy-szczegoly',
  templateUrl: './pracownicy-szczegoly.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracownicySzczegolyComponent {
  hobbit$: Observable<HobbitsDTO> = this._getsOneHobbitsDto.getOne(
    this._activatedRoute.snapshot.params.hobbitId
  );

  constructor(
    @Inject(GETS_ONE_HOBBITS_DTO)
    private _getsOneHobbitsDto: GetsOneHobbitsDtoPort,
    private _activatedRoute: ActivatedRoute
  ) {}
}
