import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {Camera} from 'ionic-native';

/*
  Generated class for the AddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add/add.html',
})
export class AddPage {

  public base64Image: string;

  constructor(private platform: Platform, private nav: NavController) {

  }

  getPicture(){

      this.platform.ready().then(() => {
        Camera.getPicture({
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 200,
          targetHeight: 200
        }).then((imageData) => {
          this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (error) => {
          console.log("error ",error)
        });
      })



  }

}
