import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private nav: NavController) {

  }

  goTabs(){
    this.nav.push(TabsPage)
  }

}
