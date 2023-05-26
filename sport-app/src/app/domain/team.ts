import { Player } from "./player"

export type Team = {
  _id: string,
  name: string
  thumbnail: string
  players: Player[]
}