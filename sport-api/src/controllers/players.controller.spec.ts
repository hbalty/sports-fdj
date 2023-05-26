import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from './players.controller'
import { PlayersService } from '../services/players.service'

describe('PlayerController', () => {
  let playerController: PlayerController;
  const playerService = {
    list: jest.fn(() => Promise.resolve([])),
  }
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [{
        provide: PlayersService,
        useValue: playerService
      }],
    }).compile();

    playerController = app.get<PlayerController>(PlayerController);
  });

  describe('root', () => {
    it('instanciates', () => {
      expect(playerController).toBeTruthy()
    });
  });

  describe('GET /leagues', () => {
    it('calls the service', () => {
      playerController.getPlayers()
      expect(playerService.list).toHaveBeenCalled()
    });
  });
});
