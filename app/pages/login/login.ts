import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Routes} from '../../providers/routes/routes'
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  /** Not normally mandatory but create bugs if ommited. **/
  static get parameters() {
        return [[NavController], [Routes]];
  }

  constructor(private nav: NavController, private routes:Routes) {
  }

  goTabs(){
      this.nav.push(this.routes.getPage(this.routes.TABS))
  }

}
