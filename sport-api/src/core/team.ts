import { Team } from "src/schemas/team.schema"

export namespace ITeam {
  export interface Repository {
    getById(id: string): Promise<Team>
    list(): Promise<Team[]>
  }

  export interface Service {
    getById(id: string): Promise<Team>
    getByLeague(leagueId: string): Promise<Team[]>
    list(): Promise<Team[]>
  }
}