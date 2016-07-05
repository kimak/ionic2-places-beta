import { Component, ViewChild } from '@angular/core';
import {Maps} from '../../components/maps/maps';

/*
  Generated class for the AroundPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/around/around.html',
  directives: [Maps],
})
export class AroundPage {

  @ViewChild(Maps)
  private map: Maps;

  constructor() {
  }

  ionViewDidEnter(){
    this.map.init(46.2043907, 6.143157699999961)
  }
}
