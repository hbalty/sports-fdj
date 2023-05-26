import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Player } from '../schemas/player.schema'
import { IPlayer } from '../core/player'
import { PlayersService } from '../services/players.service'

@Controller()
export class PlayerController {
  constructor(@Inject(PlayersService) private readonly leagueService: IPlayer.Service) {}

  @Get('/players')
  async getPlayers(): Promise<Player[]> {
    return await this.leagueService.list()
  }

  @Get('/players/team/:teamId')
  async getByTeam(@Param() teamIdParam: { teamId: string}): Promise<Player[]> {
    const { teamId } = teamIdParam
    return await this.leagueService.getByTeam(teamId)
  }
}
