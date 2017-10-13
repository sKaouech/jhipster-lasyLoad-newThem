import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router, NavigationEnd, Routes} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import * as jQuery from 'jquery';

import {BaMenuService} from '../../services';
import {GlobalState} from '../../../global.state';
import {PAGES_MENU} from '../../services/baMenu/pages.menu';
import {ResponseWrapper} from "../../../shared/model/response-wrapper.model";
import {JhiAlertService} from "ng-jhipster";

@Component({
    selector: 'jhi-ba-menu',
    templateUrl: './baMenu.html',
    styleUrls: ['./baMenu.scss']
})
export class BaMenuComponent {

    @Input() sidebarCollapsed: boolean = false;
    @Input() menuHeight: number;

    @Output() expandMenu = new EventEmitter<any>();

    public menuItems: any[];
    protected _menuItemsSub: Subscription;
    public showHoverElem: boolean;
    public hoverElemHeight: number;
    public hoverElemTop: number;
    protected _onRouteChange: Subscription;
    public outOfArea: number = -200;

    constructor(private _router: Router,         private alertService: JhiAlertService,
                private _service: BaMenuService, private _state: GlobalState) {
    }

    public updateMenu(newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    }

    public selectMenuAndNotify(): void {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    }

    public ngOnInit(): void {
          this._service.getAllPages(1,2).subscribe(
            (res: ResponseWrapper) => {
               let PAGES_MENU2 = res.json;
                console.log("PAGES_MENU2",PAGES_MENU2.pageMenus);
                this._service.updateMenuByRoutes(<Routes>PAGES_MENU2.pageMenus);
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );;
        this._onRouteChange = this._router.events.subscribe((event) => {

            if (event instanceof NavigationEnd) {
                if (this.menuItems) {
                    this.selectMenuAndNotify();
                } else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(() => this.selectMenuAndNotify());
                }
            }
        });

        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    }

    public ngOnDestroy(): void {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    }

    public hoverItem($event): void {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    }

    public toggleSubMenu($event): boolean {
        const submenu = jQuery($event.currentTarget).next();

        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        } else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }

        return false;
    }
    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
