import { Test, TestingModule } from '@nestjs/testing';
import { LeagueController } from './leagues.controller'
import { LeagueService } from '../services/leagues.sevice'

describe('LeagueController', () => {
  let leaguesController: LeagueController;
  const leaguesService = {
    list: jest.fn(() => Promise.resolve([])),
  }
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LeagueController],
      providers: [{
        provide: LeagueService,
        useValue: leaguesService
      }],
    }).compile();

    leaguesController = app.get<LeagueController>(LeagueController);
  });

  describe('root', () => {
    it('instanciates', () => {
      expect(leaguesController).toBeTruthy()
    });
  });

  describe('GET /leagues', () => {
    it('calls the service', () => {
      leaguesController.getLeagues()
      expect(leaguesService.list).toHaveBeenCalled()
    });
  });
});
