import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places';
import { AddPage } from '../add/add';
import { AroundPage } from '../around/around';
import { FriendsPage } from '../friends/friends';
import {Routes} from '../../providers/routes/routes'


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root:any = PlacesPage;
  tab2Root:any = AddPage;
  tab3Root:any = AroundPage;
  tab4Root:any = FriendsPage;

  /** Not normally mandatory but create bugs if ommited. **/
  static get parameters() {
        return [[NavController], [Routes]];
  }
  constructor(private nav: NavController, private routes:Routes) {

  }

  logout(){
      this.nav.setRoot(this.routes.getRootPage())
  }
}
