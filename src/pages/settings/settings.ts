import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { IntroPage } from '../intro/intro';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  sounds: true;
  vibrations: true;
  notifications: true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private storage: Storage
  ) { }

  ionViewDidLoad() {
    this.storage.get('SoundsSetting').then((result) => {
      if (result) this.sounds = result;
    });
    this.storage.get('VibrationsSetting').then((result) => {
      if (result) this.vibrations = result;
    });
    this.storage.get('NotificationsSetting').then((result) => {
      if (result) this.notifications = result;
    });
  }

  toggleSounds() {
    this.changeSetting('Sounds', this.sounds);
  }

  toggleVibrations() {
    this.changeSetting('Vibrations', this.vibrations);
  }

  toggleNotifications() {
    this.changeSetting('Notifications', this.notifications);
  }

  changeSetting(text: string, position: boolean) {
    const onOrOff = position ? 'on' : 'off';
    this.storage.set(`${text}Setting`, position);
    this.presentToast(text, onOrOff);
  }

  presentToast(setting, position) {
    let toast = this.toastCtrl.create({
      message: `${setting} have been turned ${position}`,
      duration: 3000
    });
    toast.present();
  }

  goToIntro() {
    this.navCtrl.push(IntroPage);
  }

}
