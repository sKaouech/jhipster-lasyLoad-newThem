import {Routes} from '@angular/router';
import {MainComponent} from "./layouts/main/main.component";
import {IsAuthenticated} from "./is-authenticated.service";

export const routes: Routes = [

    {
        path: 'login',
        loadChildren: './shared/login/login.module#LoginModule'
    },
    {
        path: 'error',
        loadChildren: './layouts/error/error.module#ErrorModule'
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }

        ]
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    }

]
