import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracownicySzczegolyComponent } from './pracownicy-szczegoly.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PracownicySzczegolyComponent],
  providers: [],
  exports: [PracownicySzczegolyComponent],
})
export class PracownicySzczegolyComponentModule {}
