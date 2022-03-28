import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_HOBBITS_DTO, AddsHobbitsDtoPort } from '../../../application/ports/secondary/adds-hobbits.dto-port';

@Component({
  selector: 'lib-create-employee',
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup({
    name: new FormControl(),
    bio: new FormControl(),
    imageUrl: new FormControl(),
  });

  constructor(@Inject(ADDS_HOBBITS_DTO) private _addsHobbitsDto: AddsHobbitsDtoPort) {
  }

  onCreateEmployeeSubmited(createEmployee: FormGroup): void {
    if (createEmployee.invalid) {
      return;
    }
    this._addsHobbitsDto.add({
      name: createEmployee.get('name').value,
      bio: createEmployee.get('bio').value,
      imageUrl: createEmployee.get('imageUrl').value,
    });
  }
}
