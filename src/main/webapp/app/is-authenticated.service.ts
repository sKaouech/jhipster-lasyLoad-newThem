import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';

import {LocalStorageService} from "ng2-webstorage";
import {Principal} from "./shared/auth/principal.service";

@Injectable()
export class IsAuthenticated implements CanActivate {
    account: Account;

    constructor(private principal: Principal,
                private router: Router,
                private localStorageService: LocalStorageService,) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
        let isAuthenticated = new Subject<boolean>();
        console.log("aytttt");
        //@to todo extract to service
        this.principal.identity().then((account) => {
            this.account = account;

            console.log("this.account", account);
            this.localStorageService.store('profileData', {account: account});
            isAuthenticated.next(true);
            isAuthenticated.complete();
        }, () => {
            console.log('login');
            this.router.navigate(['login']);

            isAuthenticated.next(false);
            isAuthenticated.complete();
        });


        return isAuthenticated;
    }
}
