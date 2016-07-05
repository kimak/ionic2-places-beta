import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Places} from '../../providers/places/places'

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
  constructor(private nav: NavController, private places:Places) {
      this.places.load().then((data)=>{
        this.items = data;
      })
  }

}
