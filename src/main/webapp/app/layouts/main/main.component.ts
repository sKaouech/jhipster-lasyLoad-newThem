import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRouteSnapshot, NavigationEnd} from '@angular/router';
import {BaThemeConfig} from '../../theme/theme.config';

import {JhiLanguageHelper} from '../../shared';
import {GlobalState} from '../../global.state';
import {BaThemePreloader} from '../../theme/services/baThemePreloader/baThemePreloader.service';
import {BaThemeSpinner} from '../../theme/services/baThemeSpinner/baThemeSpinner.service';
import {Principal} from "../../shared/auth/principal.service";
import {AuthServerProvider} from "../../shared/auth/auth-jwt.service";

@Component({
    selector: 'jhi-main',
    styleUrls: ['./main.component.scss'],
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    isMenuCollapsed: boolean = false;

    constructor(private _state: GlobalState,
                private jhiLanguageHelper: JhiLanguageHelper,
                private router: Router,
                private principal: Principal,
                private authServerProvider: AuthServerProvider,
                private _spinner: BaThemeSpinner,
                private themeConfig: BaThemeConfig) {
        themeConfig.config();

        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        // BaThemePreloader.load().then((values) => {
        //     this._spinner.hide();
        // });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'moorFreadmintourApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        console.log("main");
        // if (!this.isAuthenticated()) {
        //     this.router.navigate(['login']);
        //     return;
        // }
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

    isAuthenticated() {
        console.log("this.authServerProvider.getToken()", this.authServerProvider.getToken());
        return this.authServerProvider.getToken() !== null;
    }
}
