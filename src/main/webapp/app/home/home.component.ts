import {Component, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager} from 'ng-jhipster';

import {Account,  Principal} from '../shared';
import {Router} from "@angular/router";

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

    constructor(private principal: Principal,
                private router: Router,
                private eventManager: JhiEventManager) {
    }

    ngOnInit() {
        console.log("home");

        // this.principal.identity().then((account) => {
        //     this.account = account;
        //     console.log("this.account" , account);
        // },(error)=>{
        //     console.log('login');
        //     this.router.navigate(['login']);
        // });
        // this.registerAuthenticationSuccess();

    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
           console.log("message",message);
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.router.navigate(['login']);
    }
}
