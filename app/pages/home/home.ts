import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

  }

  goTabs(){
    this.nav.push(TabsPage)
  }
}
