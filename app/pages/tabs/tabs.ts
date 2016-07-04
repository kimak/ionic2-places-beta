import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places';
import { AddPage } from '../add/add';
import { AroundPage } from '../around/around';
import { FriendsPage } from '../friends/friends';
import {Routes} from '../../providers/routes/routes'
import {Auth} from '../../providers/auth/auth'


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root:any = PlacesPage;
  tab2Root:any = AddPage;
  tab3Root:any = AroundPage;
  tab4Root:any = FriendsPage;

  email:string;


  /** Not normally mandatory but create bugs if ommited. **/
  static get parameters() {
        return [[NavController], [Routes], [Auth]];
  }
  constructor(private nav: NavController, private routes:Routes, private auth:Auth) {
      this.email = auth.user.email
  }

  logout(){
      this.auth.logout()
      this.nav.setRoot(this.routes.getRootPage())
  }
}
