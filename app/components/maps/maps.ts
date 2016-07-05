import { Component,ElementRef } from '@angular/core';

/*
  Generated class for the Maps component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'maps',
  template: "<div id='map_canvas'></div>"
})
export class Maps {

  map:google.maps.Map;

  constructor() {
  }

  init(lat:number, long:number, zoom:number=12) {
    this.map = new google.maps.Map(document.getElementById("map_canvas"), {
          center: new google.maps.LatLng(lat, long),
          zoom: zoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP
     });
  }

}
