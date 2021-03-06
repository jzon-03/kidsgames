import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtractionComponent } from '../../games/subtraction/subtraction.component';

import { GamesComponent } from '../../games/games.component';
import { AdditionComponent } from 'src/app/games/addition/addition.component';
import { GamesnavComponent } from 'src/app/gamesnav/gamesnav.component';
import { GamesmainComponent } from 'src/app/games/gamesmain/gamesmain.component';
import { MainComponent } from 'src/app/main/main.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../material/material.module';
import { RandomadditionComponent } from '../../games/components/randomaddition/randomaddition.component';
import { DialogmessageComponent } from '../../games/dialogmessage/dialogmessage.component';
import { RandomsubtractionComponent } from '../../games/components/randomsubtraction/randomsubtraction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GamesComponent,
    SubtractionComponent,
    AdditionComponent,
    GamesnavComponent,
    GamesmainComponent,
    MainComponent,
    RandomadditionComponent,
    DialogmessageComponent,
    RandomsubtractionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class GamesmodulesModule { }
