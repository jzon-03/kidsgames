import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './games/addition/addition.component';
import { GamesComponent } from './games/games.component';
import { GamesmainComponent } from './games/gamesmain/gamesmain.component';
import { SubtractionComponent } from './games/subtraction/subtraction.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {
    path:'games',
    component:GamesComponent,
    children:[
      {path:'',component:GamesmainComponent},
      {path:'addition', component:AdditionComponent},
      {path:'subtraction', component:SubtractionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
