import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Routes} from '../../providers/routes/routes';
import {Places} from '../../providers/places/places';
import {Maps} from '../../components/maps/maps';

/*
  Generated class for the PlacePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/place/place.html',
  directives: [Maps],
})
export class PlacePage {

  @ViewChild(Maps)
  private map: Maps;

  selectedPlace:any;

  /** Not normally mandatory but create bugs if ommited. **/
  static get parameters() {
        return [[NavController],[NavParams], [Routes],[Places]];
  }
  constructor(private nav: NavController, private params: NavParams, private routes:Routes, private places:Places) {
    const selectedId = params.data.id;
    this.selectedPlace = places.getPlaceById(selectedId)
  }

  ionViewDidEnter(){
    const pos = this.selectedPlace.position
    this.map.init(pos.lat, pos.long)
  }

  onClickBack(){
    this.nav.setRoot(this.routes.getPage(this.routes.TABS))
  }
}
