import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownicyPage } from './pracownicy.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: PracownicyPage,
        }
      ])],
  	declarations: [PracownicyPage],
  	providers: [],
  	exports: [] })
export class PracownicyPageModule {
}
