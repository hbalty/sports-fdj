import { InjectModel } from "@nestjs/mongoose"
import { Model, isValidObjectId } from "mongoose"
import { League } from "../schemas/league.schema"
import { ILeague } from "../core/league"
import { BadRequestException, Injectable } from "@nestjs/common"
import { DEFAULT_LIMIT } from "../config/queries"

@Injectable()
export class LeagueRepository implements ILeague.Repository {
  constructor(@InjectModel(League.name) private leagueModel: Model<League>) {
  }

  async getById(id: string): Promise<League> {
    if (!isValidObjectId(id)) throw new BadRequestException(`${id} is not a valid league id`)
    return await this.leagueModel.findById<League>(id).populate('teams').exec()
  }

  async list(keyword?: string): Promise<League[]> {
    const keywordFilter = keyword ? {
      name: { $regex: '.*' + keyword + '.*', $options: 'i' }
    } : {}
    // on met une limite à 100 pour que consomme pas beaucoup de mémoire en cas de données volumineuses
    // L'idéal serait d'utiliser Elastic search et d'indexer les id/noms des leagues
    return await this.leagueModel.find<League>(keywordFilter).limit(DEFAULT_LIMIT).populate('teams').exec()
  }
}