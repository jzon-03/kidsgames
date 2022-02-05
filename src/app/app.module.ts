import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AdditionComponent } from './games/addition/addition.component';
import { GamesnavComponent } from './gamesnav/gamesnav.component';
import { GamesmainComponent } from './games/gamesmain/gamesmain.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AdditionComponent,
    GamesnavComponent,
    GamesmainComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
