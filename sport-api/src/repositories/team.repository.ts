import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ITeam } from "../core/team"
import { Team } from "src/schemas/team.schema"

export class TeamRepository implements ITeam.Repository {
  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {
  }

  async getById(id: string): Promise<Team> {
    return await this.teamModel.findById<Team>(id).populate('players').exec()
  }

  async list(): Promise<Team[]> {
    return await this.teamModel.find<Team>({}).populate('players').exec()
  }
}