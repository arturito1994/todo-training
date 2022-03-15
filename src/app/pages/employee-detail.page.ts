import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ 
    selector: 'lib-employee-detail-page', 
    templateUrl: './employee-detail.page.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush
 })
export class EmployeeDetailPage {
    params$ = this._activatedRoute.params
    constructor(private _activatedRoute: ActivatedRoute) {}
}
