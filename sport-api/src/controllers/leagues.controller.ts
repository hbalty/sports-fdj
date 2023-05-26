import { Controller, Get, Inject, Query } from '@nestjs/common';
import { League } from '../schemas/league.schema'
import { LeagueService } from '../services/leagues.sevice'
import { ILeague } from 'src/core/league'

@Controller()
export class LeagueController {
  constructor(@Inject(LeagueService) private readonly leagueService: ILeague.Service) {}

  @Get('/leagues')
  async getLeagues(@Query('keyword') keyword?: string): Promise<League[]> {
    return await this.leagueService.list(keyword)
  }
}
