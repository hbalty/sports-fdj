import { Player } from "../schemas/player.schema"

export namespace IPlayer {
  export interface Repository {
    getById(id: string): Promise<Player>
    list(): Promise<Player[]>
  }

  export interface Service {
    getById(id: string): Promise<Player>
    getByTeam(teamId: string): Promise<Player[]>
    list(): Promise<Player[]>
  }
}