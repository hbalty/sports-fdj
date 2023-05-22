import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'team/:teamId',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
