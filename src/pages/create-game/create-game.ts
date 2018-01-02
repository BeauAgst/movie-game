import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { CurrentGamePage } from '../current-game/current-game';
/**
 * Generated class for the CreateGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-game',
  templateUrl: 'create-game.html',
})
export class CreateGamePage {
  public players: any[];
  public playersChecked: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.players = [
      {
        name: 'Beau August',
        id: '45654'
      },
      {
        name: 'Francesca Suttle',
        id: '4589654'
      },
      {
        name: 'Sam Johnston',
        id: '455654'
      },
    ];
    this.playersChecked = 0;
  }

  togglePlayers(checked) {
    if (checked) return this.playersChecked += 1;
    return this.playersChecked -= 1;
  }

  alertMorePlayers() {
    let alert = this.alertCtrl.create({
      title: 'Not enough players!',
      subTitle: 'Please select at least 2 friends',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  startGame() {
    let loader = this.loadingCtrl.create({
      content: "Starting Game..."
    });

    if (this.playersChecked < 2) {
      this.alertMorePlayers();
    } else {
      loader.present();
      setTimeout(() => {
        loader.dismiss();
        this.navCtrl.push(CurrentGamePage);
      }, 3000);
    }
  }
}
