import { BadRequestException, Controller, Get, HttpException, HttpStatus, Inject, Param } from '@nestjs/common';
import { TeamService } from '../services/teams.service'
import { ITeam } from '../core/team'
import { Team } from 'src/schemas/team.schema'

@Controller()
export class TeamController {
  constructor(@Inject(TeamService) private readonly teamService: ITeam.Service) {}

  @Get('/teams')
  async getLeagues(): Promise<Team[]> {
    return await this.teamService.list()
  }

  @Get('/teams/league/:leagueId')
  async getByLeague(@Param() leagueIdParam: { leagueId: string }): Promise<Team[]> {
    const { leagueId } = leagueIdParam
    try {
      return await this.teamService.getByLeague(leagueId)
    } catch (e) {
      if (e instanceof BadRequestException) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
    }
  }

  @Get('/teams/:teamId')
  async getById(@Param() teamIdParam: { teamId: string }): Promise<Team> {
    const { teamId } = teamIdParam
    try {
      return await this.teamService.getById(teamId)
    } catch (e) {
      if (e instanceof BadRequestException) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
    }
  }
}
