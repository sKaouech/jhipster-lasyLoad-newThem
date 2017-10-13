import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MainComponent} from "./main.component";

@NgModule({
    declarations: [
        MainComponent,
    ],
    providers: [
    ],
    bootstrap: [ MainComponent ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forRoot([]),
    ]
})
export class MainAppModule {
}
