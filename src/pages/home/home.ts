import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {
    this.games = [
      {
        id: 0,
        action: 'It\'s your turn!',
        group: 'Facebook friends',
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ]
      },
      {
        id: 1,
        action: 'Waiting for players',
        group: 'random opponents',
        players: [
          'Player21378934',
          'Player87947893',
          'SuperPlayer763478'
        ]
      },
      {
        id: 2,
        action: 'It\'s your turn!',
        group: 'Facebook friends',
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ]
      }
    ]
  }

  deleteGame(item) {
    console.log(`Game ID ${item.id} to be removed`);
    // Find game, remove from array, and
    // Send information to database that
    // player has left game.
  }
}
