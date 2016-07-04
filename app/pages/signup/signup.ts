import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';
import {Routes} from '../../providers/routes/routes';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

  email:string;
  password:string;
  error:string;

  static get parameters() {
        return [[ViewController],[Auth],[NavController], [Routes]];
  }
  constructor(public viewCtrl: ViewController, private auth:Auth, private nav: NavController, private routes:Routes) {
  }

  signup(){
    this.auth.signup({email:this.email,password:this.password })
      .then((success)=>{

        this.goTabs();

      },(error)=>{
        this.error = error._body;
      })

  }

  goTabs(){
      this.nav.push(this.routes.getPage(this.routes.TABS));
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
