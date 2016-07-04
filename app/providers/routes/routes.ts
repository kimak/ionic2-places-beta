import { Injectable} from '@angular/core';
import {HomePage} from '../../pages/home/home';
import {LoginPage} from '../../pages/login/login';
import {SignupPage} from '../../pages/signup/signup';
import {TabsPage} from '../../pages/tabs/tabs';
import {AddPage} from '../../pages/add/add';
import {Auth} from '../../providers/auth/auth'

@Injectable()
export class Routes {
  routes:Object = {};

  HOME:string="home";
  LOGIN:string="login";
  SIGNUP:string="signup";
  TABS:string="tabs";

  constructor(private auth:Auth){
    this.routes[this.HOME]=HomePage;
    this.routes[this.LOGIN]=LoginPage;
    this.routes[this.SIGNUP]=SignupPage;
    this.routes[this.TABS]=TabsPage;
  }

  getPage(id){
    const route = this.routes[id];
    return route;
  }

  getRootPage(){
    let root = (this.auth.authenticated()) ? this.getPage(this.TABS) : this.getPage(this.HOME)
    return root;
  }

}
