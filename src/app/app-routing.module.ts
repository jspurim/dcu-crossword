import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  { path: 'puzzle/:puzzleId', component: PuzzleComponent },
  { path: '**', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
