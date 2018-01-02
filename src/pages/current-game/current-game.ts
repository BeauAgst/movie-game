import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
/**
 * Generated class for the CurrentGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-current-game',
  templateUrl: 'current-game.html',
  providers: [Keyboard]
})
export class CurrentGamePage {
  private movies;
  private timer;
  private gameInProgress;
  private currentMovie;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private keyboard: Keyboard
  ) {
    this.gameInProgress = false;
    this.timer = 60;
    this.movies = [
      'Good Will Hunting',
      'V For Vendetta',
      'Iron Man',
      'James and the Giant Peach',
      'The Dark Knight'
    ];
  }

  randomInArray() {
    if (!this.movies.length) return false;
    const index = Math.floor(Math.random() * this.movies.length);
    const movie = this.movies.splice(index, 1);
    return movie;
  }

  beginGame() {
    this.keyboard.show();
    this.gameInProgress = true;
    this.startGameTimer();
    this.currentMovie = this.randomInArray();
  }

  startGameTimer() {
    this.timer -= 1;
    const countdown = setInterval(() => {
      this.timer -= 1;
      if (this.timer === 0) {
        this.gameInProgress = false;
        clearInterval(countdown);
      }
    }, 1000);
  }

  endConfirm() {
    let alert = this.alertCtrl.create({
      title: 'End your turn',
      message: 'Are you sure? You\'ll lose points if you end your turn early.',
      buttons: [
        {
          text: 'Leave',
          role: 'leave',
          handler: () => {
            this.navCtrl.popToRoot();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    alert.present();
  }
  endGame() {
    this.endConfirm();
  }

}
