import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common"
import { IPlayer } from "../core/player"
import { Player } from "../schemas/player.schema"
import { PlayerRepository } from "../repositories/player.repository"
import { TeamService } from "./teams.service"
import { ITeam } from "src/core/team"
import { isValidObjectId } from "mongoose"
@Injectable()
export class PlayersService implements IPlayer.Service {
  constructor (
    @Inject(PlayerRepository) private readonly playerRepository: IPlayer.Repository,
    @Inject(TeamService) private readonly teamService: ITeam.Service,
    ) {
  }

  async getById(id: string): Promise<Player> {
    return this.playerRepository.getById(id)
  }

  async list(): Promise<Player[]> {
    return this.playerRepository.list()
  }

  async getByTeam(teamId: string): Promise<Player[]> {
    if (!isValidObjectId(teamId)) throw new BadRequestException(`${teamId} is not a valid team id`)
    const team = await this.teamService.getById(teamId)
    if (!team) throw new NotFoundException(`League with Id ${!isValidObjectId} does not exist`)
    return team.players
  }
}