import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common"
import { ITeam } from "../core/team"
import { TeamRepository } from "src/repositories/team.repository"
import { Team } from "src/schemas/team.schema"
import { LeagueService } from "./leagues.sevice"
import { ILeague } from "src/core/league"
import { isValidObjectId } from "mongoose"
@Injectable()
export class TeamService implements ITeam .Service {
  constructor (
    @Inject(TeamRepository) private readonly teamRepository: ITeam.Repository,
    @Inject(LeagueService) private readonly leagueService: ILeague.Service) {
  }

  async getById(id: string): Promise<Team> {
    if (!isValidObjectId(id)) throw new BadRequestException(`${id} is not a valid player id`)
    return this.teamRepository.getById(id)
  }

  async list(): Promise<Team[]> {
    return this.teamRepository.list()
  }

  async getByLeague(leagueId): Promise<Team[]> {
    const league = await this.leagueService.getById(leagueId)
    if (!league) throw new NotFoundException(`League with Id ${!leagueId} does not exsist`)
    return league.teams
  }
}