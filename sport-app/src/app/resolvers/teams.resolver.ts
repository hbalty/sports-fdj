import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Team } from "../domain/team"
import { TeamService } from "src/service/team.service"

@Injectable({ providedIn: 'root' })
export class TeamsResolver implements Resolve<Team[]> {
  constructor(private service: TeamService) {}

  async resolve(
    route: ActivatedRouteSnapshot
  ): Promise<Team[]> {
    const leagueId = route.paramMap.get('leagueId')
    return await this.service.getTeamsByLeague(leagueId)
  }
}