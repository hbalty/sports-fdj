import { Injectable } from '@angular/core'
import { TeamApi } from 'src/api/team.api'
import { Team } from 'src/app/domain/team'


@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(private teamApi: TeamApi) {}

    async getTeamsByLeague(leagueId: string): Promise<Team[]> {
      try {
        return await this.teamApi.getTeamsByLeague(leagueId)
      } catch (e) {
        return []
      }
    }
}