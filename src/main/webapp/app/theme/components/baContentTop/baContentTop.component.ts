import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

@Component({
    selector: 'jhi-ba-content-top',
    styleUrls: ['./baContentTop.scss'],
    templateUrl: './baContentTop.html',
})
export class BaContentTopComponent {

    public activePageTitle: string = '';

    constructor(private _state: GlobalState) {
        this._state.subscribe('menu.activeLink', (activeLink) => {
            if (activeLink) {
                this.activePageTitle = activeLink.title;
            }
        });
    }
}
