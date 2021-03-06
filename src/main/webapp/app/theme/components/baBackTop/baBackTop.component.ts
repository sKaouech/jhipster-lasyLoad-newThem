import {Component, ViewChild, HostListener, Input, ElementRef} from '@angular/core';

@Component({
    selector: 'jhi-ba-back-top',
    styleUrls: ['./baBackTop.scss'],
    template: `
        <i #baBackTop class="fa fa-angle-up back-top jhi-ba-back-top" title="Back to Top"></i>
    `
})
export class BaBackTopComponent {

    @Input() position: number = 400;
    @Input() showSpeed: number = 500;
    @Input() moveSpeed: number = 1000;

    @ViewChild('baBackTop') _selector: ElementRef;

    ngAfterViewInit() {
        this._onWindowScroll();
    }

    @HostListener('click')
    _onClick(): boolean {
        jQuery('html, body').animate({scrollTop: 0}, {duration: this.moveSpeed});
        return false;
    }

    @HostListener('window:scroll')
    _onWindowScroll(): void {
        const el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    }
}
