import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs';
import { UtilityService } from '../service/utility.api';
import { Team } from 'src/app/domain/team'


@Injectable({
    providedIn: 'root'
})
export class TeamApi {

    constructor(private _http: HttpClient) {}

    async getTeamsByLeague(leagueId = ''): Promise<Team[]> {
        return lastValueFrom(this._http.get<Team[]>(`http://localhost:3000/teams/league/${leagueId}`))
    }

    
    
    
}

