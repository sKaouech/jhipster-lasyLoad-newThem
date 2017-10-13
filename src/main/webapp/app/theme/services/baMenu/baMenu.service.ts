import {Injectable} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {Http, Response} from '@angular/http';
import * as _ from 'lodash';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {PAGES_MENU} from './pages.menu';
import {Observable} from "rxjs/Observable";
import {ResponseWrapper} from "../../../shared/model/response-wrapper.model";
import {createRequestOption} from "../../../shared/model/request-util";
import {SERVER_API_URL} from "../../../app.constants";

@Injectable()
export class BaMenuService {
    menuItems = new BehaviorSubject<any[]>([]);
    private resourceUrl = SERVER_API_URL + 'sportisecuto/api/pages';

    protected _currentMenuItem = {};

    constructor(private _router: Router, private http: Http) {
    }

    getAllPages(entiteId: number, roleId: number): Observable<ResponseWrapper> {
        return this.http.get(`${this.resourceUrl}/1/2`)
            .map((res: Response) => this.convertResponse(res));

    }
    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    /**
     * Updates the routes in the menu
     *
     * @param {Routes} routes Type compatible with app.menu.ts
     */
    public updateMenuByRoutes(routes: Routes) {
        const convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));
        this.menuItems.next(convertedRoutes);
    }

    public convertRoutesToMenus(routes: Routes): any[] {
        console.log('routes', routes);
        const items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    }

    public getCurrentItem(): any {
        return this._currentMenuItem;
    }

    public selectMenuItem(menuItems: any[]): any[] {
        const items = [];
        menuItems.forEach((item) => {
            this._selectItem(item);

            if (item.selected) {
                this._currentMenuItem = item;
            }

            if (item.children && item.children.length > 0) {
                item.children = this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    }

    protected _skipEmpty(items: any[]): any[] {
        const menu = [];
        items.forEach((item) => {
            let menuItem;
            if (item.skip) {
                if (item.children && item.children.length > 0) {
                    menuItem = item.children;
                }
            } else {
                menuItem = item;
            }

            if (menuItem) {
                menu.push(menuItem);
            }
        });

        return [].concat.apply([], menu);
    }

    protected _convertArrayToItems(routes: any[], parent?: any): any[] {
        const items = [];
        routes.forEach((route) => {
            items.push(this._convertObjectToItem(route, parent));
        });
        return items;
    }

    protected _convertObjectToItem(object, parent?: any): any {
        let item: any = {};
        if (object.data && object.data.menu) {
            // this is a menu object
            item = object.data.menu;
            item.route = object;
            delete item.route.data.menu;
        } else {
            item.route = object;
            item.skip = true;
        }

        // we have to collect all paths to correctly build the url then
        if (Array.isArray(item.route.path)) {
            item.route.paths = item.route.path;
        } else {
            item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
            if (!!item.route.path) {
                item.route.paths.push(item.route.path);
            }
        }

        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }

        const prepared = this._prepareItem(item);

        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }

        return prepared;
    }

    protected _prepareItem(object: any): any {
        if (!object.skip) {
            object.target = object.target || '';
            object.pathMatch = object.pathMatch || 'full';
            return this._selectItem(object);
        }

        return object;
    }

    protected _selectItem(object: any): any {
        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
        return object;
    }
}
