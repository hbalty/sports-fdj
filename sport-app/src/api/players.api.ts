import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs';
import { UtilityService } from '../service/utility.api';
import { Player } from 'src/app/domain/player'


@Injectable({
    providedIn: 'root'
})
export class PlayerApi {

    constructor(private _http: HttpClient, private _utility: UtilityService ) {}

    async getPlayersByTeam(teamId = ''): Promise<Player[]> {
        return lastValueFrom(this._http.get<Player[]>(`http://localhost:3000/players/team/${teamId}`))
    }

    
    
    
}

