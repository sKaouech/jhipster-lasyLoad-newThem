import {Component, Input} from '@angular/core';

@Component({
    selector: 'jhi-ba-card',
    templateUrl: './baCard.html',
})
export class BaCardComponent {
    @Input() cardTitle: String;
    @Input() baCardClass: String;
    @Input() cardType: String;
}
