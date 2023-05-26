import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';
import { TeamsResolver } from './resolvers/teams.resolver'
import { TeamDetailsComponent } from './team-details/team-details.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'league/:leagueId',
    component: TeamComponent,
    resolve: {
      teams: TeamsResolver
    }
  },
  {
    component: TeamDetailsComponent,
    path: 'team/:teamId'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
