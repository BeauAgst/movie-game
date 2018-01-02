import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentGamePage } from './current-game';

@NgModule({
  declarations: [
    CurrentGamePage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentGamePage),
  ],
})
export class CurrentGamePageModule {}
