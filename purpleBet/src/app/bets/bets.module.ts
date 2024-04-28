import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetsRoutingModule } from './bets-routing.module';
import { BetsHomeComponent } from './pages/bets-home/bets-home.component';
import { BetTemplateComponent } from './components/bet-template/bet-template.component';


@NgModule({
  declarations: [
    BetsHomeComponent,
    BetTemplateComponent
  ],
  imports: [
    CommonModule,
    BetsRoutingModule
  ]
})
export class BetsModule { }
