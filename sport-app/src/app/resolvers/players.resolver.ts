import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Player } from "../domain/player"
import { PlayerService } from "src/service/player.service"

@Injectable({ providedIn: 'root' })
export class PlayersResolver implements Resolve<Player[]> {
  constructor(private service: PlayerService) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Player[]> {
    const leagueId = route.paramMap.get('leagueId')
    return await this.service.getPlayersByTeam(leagueId)
  }
}