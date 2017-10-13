import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';

import {
    AccountService,
    AuthServerProvider,
    CSRFService,
    HasAnyAuthorityDirective,
    MoorFreadmintourSharedCommonModule,
    MoorFreadmintourSharedLibsModule,
    Principal,
    StateStorageService,
    UserService,
} from './';
import {LoginSharedModule} from "./login/login-shared.module";

@NgModule({
    imports: [
        MoorFreadmintourSharedLibsModule,
        MoorFreadmintourSharedCommonModule,
        // LoginSharedModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [ ],
    exports: [
        MoorFreadmintourSharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MoorFreadmintourSharedModule {}
