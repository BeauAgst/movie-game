import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.slides.lockSwipeToPrev(true);
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }

  slideChanged() {
    if (this.slides.isBeginning()) this.slides.lockSwipeToPrev(true);
    else this.slides.lockSwipeToPrev(false);

    if (this.slides.isEnd()) this.slides.lockSwipeToNext(true);
    else this.slides.lockSwipeToNext(false);
  }
}
