import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public nav: NavController) {

  }

  goLogin(){
    this.nav.push(LoginPage)
  }
}
