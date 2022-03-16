import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-kontakt-list', templateUrl: './kontakt-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class KontaktListComponent {
    autor="Wpisz imie i kliknij sumbit"
    autor1="Wpisz adres i kliknij sumbit";
  readonly kontakt: FormGroup = new FormGroup({imie: new FormControl(), adres: new FormControl()});

    submit(kontakt:FormGroup){
        this.autor=kontakt.get("imie").value
        this.autor1=kontakt.get("adres").value;
    }
}
