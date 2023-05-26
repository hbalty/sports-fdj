import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { IPlayer } from "../core/player"
import { Player } from "../schemas/player.schema"

export class PlayerRepository implements IPlayer.Repository {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {
  }

  async getById(id: string): Promise<Player> {
    return (await this.playerModel.findById<Player>(id))
  }

  async list(): Promise<Player[]> {
    return (await this.playerModel.find<Player>({}))
  }
}