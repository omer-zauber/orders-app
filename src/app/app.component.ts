import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, private authService: AuthService) {
    firebase.initializeApp({
      apiKey: 'AIzaSyBrblsIgjjQ6pwqRJ5sJzMY7_MdpOvIu_0',
      authDomain: 'orders-app-d8da1.firebaseapp.com'
    });
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.isAuthenticated = true;
    //     this.rootPage = TabsPage;
    //   } else {
    //     this.isAuthenticated = false;
    //     this.rootPage = SigninPage;
    //   }
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // splashScreen.hide();
    });
  }
}
