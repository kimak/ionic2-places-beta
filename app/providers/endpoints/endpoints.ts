import { Injectable } from '@angular/core';

/*
  Generated class for the Endpoints provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Endpoints {

  //API_PATH: string = "http://ionic-places-jwt.herokuapp.com"
  API_PATH: string = "http://localhost:3001"

  getLogin(){
    return this.API_PATH + "/sessions/create"
  }

  getSignup(){
    return this.API_PATH + "/users"
  }

  getPlaces(){
    return this.API_PATH + "/user/places"
  }

}
