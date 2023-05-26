import { Inject, Injectable } from "@nestjs/common"
import { ILeague } from "../core/league"
import { League } from "../schemas/league.schema"
import { LeagueRepository } from "../repositories/league.repository"

@Injectable()
export class LeagueService implements ILeague.Service {
  constructor(@Inject(LeagueRepository) private readonly leagueRepository: ILeague.Repository) {

  }

  async getById(id: string): Promise<League> {
    return await this.leagueRepository.getById(id)
  }

  async list(keyword?: string): Promise<League[]> {
    return await this.leagueRepository.list(keyword)
  }
}