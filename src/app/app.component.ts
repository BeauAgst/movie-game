import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html',
  providers: [
    ScreenOrientation
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  loader: any;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Contact Us', component: ContactPage },
    ];

  }

  initializeApp() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.remove('introShown');
      this.storage.get('introShown').then((result) => {

        if (result) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
