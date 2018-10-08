import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { OrdersPage } from '../pages/orders/orders';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OrderDetailsPage,
    OrdersPage,
    SignupPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OrderDetailsPage,
    OrdersPage,
    SignupPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule {}
