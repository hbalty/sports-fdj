import { Team } from "./team"

export type League = {
  _id: string
  name: string
  sport: string
  teams: Team[]
}