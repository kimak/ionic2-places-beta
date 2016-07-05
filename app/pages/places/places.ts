import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Routes} from '../../providers/routes/routes';
import {Places} from '../../providers/places/places'
import {PlacePage} from '../../pages/place/place'

/*
  Generated class for the PlacesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/places/places.html',
})
export class PlacesPage {

  items:any = []

  /** Not normally mandatory but create bugs if ommited. **/
  static get parameters() {
        return [[NavController], [Routes],[Places]];
  }
  constructor(private nav: NavController, private routes:Routes, private places:Places) {
      this.places.load().then((data)=>{
        this.items = data;
      })
  }

  selectItem(id){
    this.nav.insert(0,this.routes.getPage(this.routes.PLACE),{id:id})
  }

}
