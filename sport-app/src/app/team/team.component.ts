import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { Observable, map } from 'rxjs'
import { PlayerService } from 'src/service/player.service';
import { Player } from '../domain/player'
import { TeamService } from 'src/service/team.service'
import { Team } from '../domain/team'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams$: Promise<Team[]>
  constructor(private aRoute: ActivatedRoute, private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe((data) => {
      const leagueId = data.get('leagueId')
      if (leagueId) this.teams$ = this.teamService.getTeamsByLeague(leagueId)  
    })
  }

  doNavigateToDetails(team: Team) {
    this.router.navigate(['team' + '/' +  team._id])
  }
}
