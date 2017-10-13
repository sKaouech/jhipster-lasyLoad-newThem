import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';
import {errorRoute} from "./error.route";
import {ErrorComponent} from "./error.component";


@NgModule({
    declarations: [
        ErrorComponent
    ],
    providers: [],
    bootstrap: [ErrorComponent],
    imports: [
        TranslateModule,
        RouterModule.forChild(errorRoute),
    ],
    entryComponents: []
})
export class ErrorModule {
}
