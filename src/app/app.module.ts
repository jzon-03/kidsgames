import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesmodulesModule } from './modules/gamesmodules/gamesmodules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AdditiondirectiveDirective } from './directives/additiondirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdditiondirectiveDirective
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    GamesmodulesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
