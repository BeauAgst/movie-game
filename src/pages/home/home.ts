import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CreateGamePage } from '../create-game/create-game';
import { CurrentGamePage } from '../current-game/current-game';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user;
  public games;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {
    this.user = 'Beau August';
    this.games = [
      {
        id: 0,
        group: 'Facebook friends',
        host: 'Beau August',
        currentRound: 2,
        expiry: 10,
        currentDescriptor: {
          name: 'Beau August',
          id: 0,
        },
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ],
        rounds: {
          1: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: true,
                points: 1,
              },
              'Sam O\'Leary': {
                played: true,
                points: 2,
              },
              'Sam Johnston': {
                played: true,
                points: 0,
              }
            }
          },
          2: {
            players: {
              'Beau August': {
                played: false,
                points: 0,
              },
              'Francesca Suttle': {
                played: false,
                points: 1,
              },
              'Sam O\'Leary': {
                played: false,
                points: 2,
              },
              'Sam Johnston': {
                played: false,
                points: 0,
              }
            }
          }
        },
      },
      {
        id: 1,
        group: 'Facebook friends',
        host: 'Beau August',
        expiry: 560,
        currentRound: 2,
        currentDescriptor: {
          name: 'Beau August',
          id: 0,
        },
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ],
        rounds: {
          1: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: true,
                points: 1,
              },
              'Sam O\'Leary': {
                played: true,
                points: 2,
              },
              'Sam Johnston': {
                played: true,
                points: 0,
              }
            }
          },
          2: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: false,
                points: 1,
              },
              'Sam O\'Leary': {
                played: false,
                points: 2,
              },
              'Sam Johnston': {
                played: false,
                points: 0,
              }
            }
          }
        },
      },
      {
        id: 2,
        group: 'Facebook friends',
        host: 'Beau August',
        currentRound: 2,
        expiry: 107,
        currentDescriptor: {
          name: 'Beau August',
          id: 0,
        },
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ],
        rounds: {
          1: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: true,
                points: 1,
              },
              'Sam O\'Leary': {
                played: true,
                points: 2,
              },
              'Sam Johnston': {
                played: true,
                points: 0,
              }
            }
          },
          2: {
            players: {
              'Beau August': {
                played: false,
                points: 0,
              },
              'Francesca Suttle': {
                played: false,
                points: 1,
              },
              'Sam O\'Leary': {
                played: false,
                points: 2,
              },
              'Sam Johnston': {
                played: false,
                points: 0,
              }
            }
          }
        },
      },
      {
        id: 3,
        group: 'Facebook friends',
        host: 'Beau August',
        expiry: 7085,
        currentRound: 2,
        currentDescriptor: {
          name: 'Beau August',
          id: 0,
        },
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ],
        rounds: {
          1: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: true,
                points: 1,
              },
              'Sam O\'Leary': {
                played: true,
                points: 2,
              },
              'Sam Johnston': {
                played: true,
                points: 0,
              }
            }
          },
          2: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: false,
                points: 1,
              },
              'Sam O\'Leary': {
                played: false,
                points: 2,
              },
              'Sam Johnston': {
                played: false,
                points: 0,
              }
            }
          }
        },
      },
      {
        id: 4,
        group: 'Facebook friends',
        host: 'Beau August',
        currentRound: 2,
        expiry: 15760,
        currentDescriptor: {
          name: 'Beau August',
          id: 0,
        },
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ],
        rounds: {
          1: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: true,
                points: 1,
              },
              'Sam O\'Leary': {
                played: true,
                points: 2,
              },
              'Sam Johnston': {
                played: true,
                points: 0,
              }
            }
          },
          2: {
            players: {
              'Beau August': {
                played: false,
                points: 0,
              },
              'Francesca Suttle': {
                played: false,
                points: 1,
              },
              'Sam O\'Leary': {
                played: false,
                points: 2,
              },
              'Sam Johnston': {
                played: false,
                points: 0,
              }
            }
          }
        },
      },
      {
        id: 5,
        group: 'Facebook friends',
        host: 'Beau August',
        expiry: 12,
        currentRound: 2,
        currentDescriptor: {
          name: 'Beau August',
          id: 0,
        },
        players: [
          'Beau August',
          'Francesca Suttle',
          'Sam O\'Leary',
          'Sam Johnston'
        ],
        rounds: {
          1: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: true,
                points: 1,
              },
              'Sam O\'Leary': {
                played: true,
                points: 2,
              },
              'Sam Johnston': {
                played: true,
                points: 0,
              }
            }
          },
          2: {
            players: {
              'Beau August': {
                played: true,
                points: 0,
              },
              'Francesca Suttle': {
                played: false,
                points: 1,
              },
              'Sam O\'Leary': {
                played: false,
                points: 2,
              },
              'Sam Johnston': {
                played: false,
                points: 0,
              }
            }
          }
        },
      },
    ]
  }

  ionViewWillEnter() {
    this.orderGames();
  }

  doRefresh(refresher) {
    // Update Games here, they will also need 
    // to be re-ordered afterwards.
    this.orderGames();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  orderGames() {
    this.games.sort((a, b) => {
      const aPlayed = a.rounds[a.currentRound].players[this.user].played;
      const bPlayed = b.rounds[b.currentRound].players[this.user].played;
      if (aPlayed && bPlayed) return 0;
      if (aPlayed) return 1;
      if (a.expiry < b.expiry) return -1;
      if (a.expiry > b.expiry) return 1;
      return 0;
    });
  }

  findGameByID(ID) {
    return this.games.findIndex((game) => {
      return game.id === ID;
    });
  }

  deleteGame(item) {
    // Find game, remove from array, and
    // Send information to database that
    // player has left game.
    console.log(`Player needs to be removed from game created by ${item.host}`);
    const gameIndex = this.findGameByID(item.id);
    this.games.splice(gameIndex, 1);
  }

  createGame() {
    // Push create game form
    this.navCtrl.push(CreateGamePage);
  }

  startGame() {
    let loader = this.loadingCtrl.create({
      content: "Starting Game...",
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push(CurrentGamePage);
    }, 3000);
  }

  takeTurn() {
    console.log('you clicked me');
  }

}
