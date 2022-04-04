import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesDTO } from '../../../application/ports/secondary/messages.dto';
import { GETS_ALL_MESSAGES_DTO, GetsAllMessagesDtoPort } from '../../../application/ports/secondary/gets-all-messages.dto-port';

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
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    number: new FormControl(),
  });
  messages$: Observable<MessagesDTO[]> = this._getsAllMessagesDto.getAll();

  constructor(@Inject(GETS_ALL_MESSAGES_DTO) private _getsAllMessagesDto: GetsAllMessagesDtoPort) {
  }

  submit(contact: FormGroup) {
    this.name1 = contact.get('name').value;
    this.name2 = contact.get('surname').value;
    this.name3 = contact.get('email').value;
    this.name4 = contact.get('number').value;
    alert('WYGENEROWANO LISTE');
  }
}
