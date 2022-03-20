import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HobbitsDTO } from '../../../application/ports/secondary/hobbits.dto';
import { DepartmentDTO } from '../../../application/ports/secondary/department.dto';

@Component({ selector: 'lib-hobbits-list', templateUrl: './hobbits-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class HobbitsListComponent {
    hobbits$: Observable<HobbitsDTO[]> = of([
        {
           id:"1",
           name: "Frodo",
           bio: 'Tutaj opis Froda',
           imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20MsuUVAVx_n8_-N9Y_xM7X_0LJhqoa3n7WDztBbzACpVO4MH_eSlyY3YQOBa51xrOnY&usqp=CAU',
           department:{
              name:'Baggins',
              empoyeeCount:1,
           },
        },
        {
            id:"2",
            name: "Sam",
            bio: 'Tutaj opis Sama',
            imageUrl: 'https://fwcdn.pl/fph/10/65/1065/447278.2.jpg',
            department:{
               name:'Gamgee',
               empoyeeCount:2,
            },
         },
         {
            id:"3",
            name: "Bilbo",
            bio: 'Tutaj Opis Bilba',
            imageUrl: 'https://img.wprost.pl/img/ian-holm-jako-bilbo-baggins-w-filmie-wladca-pierscieni-druzyna-pierscienia/3c/35/188fd402e7c93ca560ba01742239.png',
            department:{
               name:'Baggins',
               empoyeeCount:3,
            },
         },
    ])
}
