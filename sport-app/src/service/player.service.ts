import { Injectable } from '@angular/core'
import { PlayerApi } from 'src/api/players.api'
import { Player } from 'src/app/domain/player'


@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    constructor(private playerApi: PlayerApi) {}

    async getPlayersByTeam(teamId: string): Promise<Player[]> {
        return await this.playerApi.getPlayersByTeam(teamId)
    }
}