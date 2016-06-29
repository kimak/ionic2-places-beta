import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places';
import { AddPage } from '../add/add';
import { AroundPage } from '../around/around';
import { FriendsPage } from '../friends/friends';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root:any = PlacesPage;
  tab2Root:any = AddPage;
  tab3Root:any = AroundPage;
  tab4Root:any = FriendsPage;

  constructor(private nav: NavController) {

  }
}
