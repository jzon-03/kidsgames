import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtractionComponent } from '../../games/subtraction/subtraction.component';

import { GamesComponent } from '../../games/games.component';
import { AdditionComponent } from 'src/app/games/addition/addition.component';
import { GamesnavComponent } from 'src/app/gamesnav/gamesnav.component';
import { GamesmainComponent } from 'src/app/games/gamesmain/gamesmain.component';
import { MainComponent } from 'src/app/main/main.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    GamesComponent,
    SubtractionComponent,
    AdditionComponent,
    GamesnavComponent,
    GamesmainComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class GamesmodulesModule { }
