import { Injectable} from '@angular/core';
import {HomePage} from '../../pages/home/home';
import {LoginPage} from '../../pages/login/login';
import {TabsPage} from '../../pages/tabs/tabs';
import {AddPage} from '../../pages/add/add';

@Injectable()
export class Routes {
  routes:Object = {};

  HOME:string="home";
  LOGIN:string="login";
  TABS:string="tabs";

  constructor(){
    this.routes[this.HOME]=HomePage;
    this.routes[this.LOGIN]=LoginPage;
    this.routes[this.TABS]=TabsPage;
  }

  getPage(id){
    const route = this.routes[id];
    return route;
  }

  getRootPage(){
    let root =this.getPage(this.HOME)
    return root;
  }

}
