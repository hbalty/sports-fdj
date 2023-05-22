import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/services/players.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  players = []
  constructor(private aRoute: ActivatedRoute, private _playerService: PlayerService) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(
      params => {
        this._playerService.getPlayersByTeam(params.teamId).subscribe(
          players => {
            this.players = players
          },
          err => {
            console.error(err)
          } 
        )
      }
    )
  }
    

}
