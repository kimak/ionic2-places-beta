import {Component, PLATFORM_DIRECTIVES, provide} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {HeaderContent} from './components/header-content/header-content';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  provide(PLATFORM_DIRECTIVES, {useValue: HeaderContent, multi: true})
],{
    mode: 'md',
    platforms: {
     ios: {
       tabbarPlacement: 'top',
     }
   }
});
