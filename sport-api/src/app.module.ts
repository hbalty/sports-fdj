import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeagueController } from './controllers/leagues.controller'
import { LeagueRepository } from './repositories/league.repository'
import { LeagueService } from './services/leagues.sevice'
import { League, LeagueSchema } from './schemas/league.schema'
import { Team, TeamSchema } from './schemas/team.schema'
import { PlayerController } from './controllers/players.controller'
import { PlayersService } from './services/players.service'
import { PlayerRepository } from './repositories/player.repository'
import { Player, PlayerSchema } from './schemas/player.schema'
import { TeamController } from './controllers/teams.controller'
import { TeamService } from './services/teams.service'
import { TeamRepository } from './repositories/team.repository'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/sports'),
    MongooseModule.forFeature([
      { name: League.name, schema: LeagueSchema },
      { name: Player.name, schema: PlayerSchema },
      { name: Team.name, schema: TeamSchema }
    ])
  ],
  controllers: [
    AppController,
    LeagueController,
    PlayerController,
    TeamController
  ],
  providers: [
    AppService, 
    LeagueService,
    LeagueRepository,
    PlayersService,
    PlayerRepository,
    TeamService,
    TeamRepository
  ],
})
export class AppModule {}
