import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-kontakt-list', templateUrl: './kontakt-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class KontaktListComponent {
    autor="Kliknij na mnie";
  readonly kontakt: FormGroup = new FormGroup({imie: new FormControl(), adres: new FormControl()});

    onclick(){
        this.autor="Strona Artura"
    }
}
