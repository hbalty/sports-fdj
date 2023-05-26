import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { LeagueApi } from 'src/api/leagues.api'
import { League } from 'src/app/domain/league'


@Injectable({
    providedIn: 'root'
})
export class LeagueService {

    constructor(private leagueApi: LeagueApi) {}

    async getLeaguesByKeyword(keyword?: string): Promise<League[]> {
        return await this.leagueApi.getLeaguesByKeyword(keyword)
    }
}