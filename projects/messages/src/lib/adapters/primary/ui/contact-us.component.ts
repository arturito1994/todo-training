import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesDTO } from '../../../application/ports/secondary/messages.dto';
import {
  GETS_ALL_MESSAGES_DTO,
  GetsAllMessagesDtoPort,
} from '../../../application/ports/secondary/gets-all-messages.dto-port';
import {
  ADDS_MESSAGES_DTO,
  AddsMessagesDtoPort,
} from '../../../application/ports/secondary/adds-messages.dto-port';
import { BinaryOperator } from '@angular/compiler';

@Component({
  selector: 'lib-contact-us',
  templateUrl: './contact-us.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  name1 = '';
  name2 = '';
  name3 = '';
  name4 = '';
  readonly contact: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    imageUrl: new FormControl(),
    bio: new FormControl(),
  });
  messages$: Observable<MessagesDTO[]> = this._getsAllMessagesDto.getAll();

  constructor(
    @Inject(GETS_ALL_MESSAGES_DTO)
    private _getsAllMessagesDto: GetsAllMessagesDtoPort,
    @Inject(ADDS_MESSAGES_DTO) private _addsMessagesDto: AddsMessagesDtoPort
  ) {}

  onContactSubmited(contact): void {
    if (contact.invalid) {
      return;
    }
    this._addsMessagesDto.add({
      id: contact.get('id').value,
      name: contact.get('name').value,
      imageUrl: contact.get('imageUrl').value,
      bio: contact.get('bio').value,
    });
  }
}
