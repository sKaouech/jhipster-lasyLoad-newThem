import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
// import { AppTranslationModule } from '../app.translation.module';

import {
    BaThemeConfig
} from './theme.config';

import {
    BaThemeConfigProvider
} from './theme.configProvider';

import {
    BaBackTopComponent,
    BaCardComponent,
    BaCheckboxComponent,
    BaContentTopComponent,
    BaMenuItemComponent,
    BaMenuComponent,
    BaMsgCenterComponent,
    BaMultiCheckboxComponent,
    BaSidebarComponent
} from './components';

import {BaCardBlurDirective} from './components/baCard/baCardBlur.directive';

import {
    BaScrollPositionDirective,
    BaSlimScrollDirective,
    BaThemeRunDirective
} from './directives';

import {
    BaAppPicturePipe,
    BaKameleonPicturePipe,
    BaProfilePicturePipe
} from './pipes';

import {
    BaImageLoaderService,
    BaMenuService,
    BaThemePreloader,
    BaThemeSpinner
} from './services';

import {
    EmailValidator,
    EqualPasswordsValidator
} from './validators';

const NGA_COMPONENTS = [
    BaBackTopComponent,
    BaCardComponent,
    BaCheckboxComponent,
    BaContentTopComponent,
    BaMenuItemComponent,
    BaMenuComponent,
    BaMsgCenterComponent,
    BaMultiCheckboxComponent,
    BaSidebarComponent
];

const NGA_DIRECTIVES = [
    BaScrollPositionDirective,
    BaSlimScrollDirective,
    BaThemeRunDirective,
    BaCardBlurDirective
];

const NGA_PIPES = [
    BaAppPicturePipe,
    BaKameleonPicturePipe,
    BaProfilePicturePipe
];

const NGA_SERVICES = [
    BaImageLoaderService,
    BaThemePreloader,
    BaThemeSpinner,
    BaMenuService
];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

@NgModule({
    declarations: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        // AppTranslationModule,
        ReactiveFormsModule
    ],
    exports: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ]
})

export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: NgaModule,
            providers: [
                BaThemeConfigProvider,
                BaThemeConfig,
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
