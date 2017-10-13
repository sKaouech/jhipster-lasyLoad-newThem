import './vendor.ts';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2Webstorage} from 'ng2-webstorage';
import {GlobalState} from './global.state';

import {MoorFreadmintourSharedModule, UserRouteAccessService} from './shared';
import {MoorFreadmintourAccountModule} from './account/account.module';
import {MoorFreadmintourEntityModule} from './entities/entity.module';
import {NgaModule} from './theme/nga.module';

import {customHttpProvider} from './blocks/interceptor/http.provider';
import {PaginationConfig} from './blocks/config/uib-pagination.config';
import {ActiveMenuDirective, FooterComponent, NavbarComponent, PageRibbonComponent, ProfileService} from './layouts';
import {RouterModule} from "@angular/router";
import {routes} from "./app.route";
import {AppComponent} from "./app.component";
import {MainAppModule} from "./layouts/main/main-app.module";
import {MoorFreadmintourAdminModule} from "./admin/admin.module";
import {IsAuthenticated} from './is-authenticated.service';

// jhipster-needle-angular-add-module-import JHipster will add new module here

// Application wide providers
const APP_PROVIDERS = [
    GlobalState
];
@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RouterModule.forRoot(routes,{ useHash: true }),
        MainAppModule,
        MoorFreadmintourSharedModule,
        MoorFreadmintourAdminModule,
        MoorFreadmintourAccountModule,
        NgaModule.forRoot(),
        MoorFreadmintourEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        NavbarComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,AppComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
        APP_PROVIDERS,
        IsAuthenticated

    ],
    bootstrap: [ AppComponent ]
})
export class MoorFreadmintourAppModule {}
