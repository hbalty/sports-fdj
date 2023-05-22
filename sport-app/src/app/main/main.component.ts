import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeagueService } from 'src/services/leagues.service';
import { take } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options = [];
  teams = [];
  leagues = [];
  searchForm = new FormControl()
  searchBtnStyle = {
    width: '100%'
  } 

  tileStyle = {
    cursor: 'pointer' 
  }
  constructor(private _leaguesService: LeagueService, private _router: Router) { }
  
  ngOnInit(): void {
  }
  
  doUpdateOptions(keyword) {
    console.log(keyword)
    this._leaguesService.getLeaguesByKeyword(keyword).pipe(
      take(1)
      ).subscribe(
        (data) => {
          this.options = data
        },
        (err) => {
          console.log(err)
        }
        )
      }
      
      
      doSelectTeam(league) {
        this.teams = league.teams
      }


      doShowPlayers(team) {
        this._router.navigateByUrl(`/team/${team._id}`)
      }
    }
    
    
    