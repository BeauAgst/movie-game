import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateGamePage } from './create-game';

@NgModule({
  declarations: [
    CreateGamePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateGamePage),
  ],
})
export class CreateGamePageModule {}
