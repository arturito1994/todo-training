import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-contact-us',
  templateUrl: './contact-us.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  name1 = 'wpisz name';
  name2 = 'wpisz surname';
  name3 = 'wpisz email';
  name4 = 'wpisz number';
  readonly contact: FormGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    number: new FormControl(),
  });
  submit(contact: FormGroup) {
    this.name1 = contact.get('name').value;
    this.name2 = contact.get('surname').value;
    this.name3 = contact.get('email').value;
    this.name4 = contact.get('number').value;
  }
}
