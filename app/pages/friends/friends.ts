import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Contacts} from 'ionic-native';

/*
  Generated class for the FriendsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/friends/friends.html',
})
export class FriendsPage {

  contactsfound:any;

  constructor() {


      this.contactsfound = [];

      Contacts.find(['*']).then((contacts) => {
        contacts.forEach( (c)=> {
          if (c.name.givenName && c.phoneNumbers) {
            this.contactsfound.push({name: c.name.givenName, phone: c.phoneNumbers[0].value}); // grab only the properties you need avoiding birthday (ios bug on date formating) http://stackoverflow.com/questions/36798316/ionic-cordova-contacts-plugin-returns-invalid-date-on-ios-after-upgrade-to-ionic
          }
        });
        console.log(this.contactsfound)
      },(error)=>{
          alert("error "+error)
      }).catch((error)=>{
        alert("catch"+error)
      })
    }

}
