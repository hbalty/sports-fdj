import { League } from '../schemas/league.schema';
export namespace ILeague {
  export interface Repository {
    getById(id: string): Promise<League>;
    list(keyword?: string): Promise<League[]>
  }
  export interface Service {
    getById(id: string): Promise<League>
    list(keyword?: string): Promise<League[]>
  }
}