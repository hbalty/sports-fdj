import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators'
import { Router } from '@angular/router';
import { LeagueService } from 'src/service/league.service'
import { Observable } from 'rxjs'
import { League } from '../domain/league'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options = [];
  teams = [];
  leagues$: Promise<League[]>
  searchForm = new FormControl()
  searchBtnStyle = {
    width: '100%'
  } 

  tileStyle = {
    cursor: 'pointer' 
  }
  constructor(private _leaguesService: LeagueService, private _router: Router) { }
  
  ngOnInit(): void {
    this.doUpdateOptions(this.searchForm.value)
  }
  
  async doUpdateOptions(keyword) {
    this.leagues$ = this._leaguesService.getLeaguesByKeyword(keyword)
  }
      
      
  doSelectTeam(league: League) {
    this._router.navigateByUrl(`/league/${league._id}`)
  }


  doShowPlayers(team) {
    this._router.navigateByUrl(`/team/${team._id}`)
  }
}
    
    
    