import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesHomeComponent } from './pages/games-home/games-home.component';
import { GameCardComponent } from './components/game-card/game-card.component';


@NgModule({
  declarations: [
    GamesHomeComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
