import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";
import {LoginSharedModule} from "./login-shared.module";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    providers: [],
    bootstrap: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        LoginSharedModule,
        RouterModule.forChild(routes),
    ],
    entryComponents: []
})
export class LoginModule {
}
