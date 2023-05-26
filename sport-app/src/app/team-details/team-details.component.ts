import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/service/player.service'
import { Player } from '../domain/player'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  players$: Promise<Player[]>
  constructor(private readonly playerService: PlayerService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe((data) => {
      const teamId = data.get('teamId')
      if (teamId) this.players$ = this.playerService.getPlayersByTeam(teamId)  
    })
  }

}
