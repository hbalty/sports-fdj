import { Test, TestingModule } from '@nestjs/testing';
import { LeagueRepository } from './league.repository'
import { getModelToken } from '@nestjs/mongoose'
import { League } from '../schemas/league.schema'

/**
 * A s'en servir comme model. Les tests ne sont pas implémentés dans les autres repo/services
 */

describe('LeagueRepository', () => {
  let leagueRepository: LeagueRepository;
  const modelStub = {
    find: jest.fn(),
    findById: jest.fn()
  }
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        LeagueRepository
        ,{
        provide: getModelToken(League.name),
        useValue: modelStub
      }],
    }).compile();

    leagueRepository = app.get(LeagueRepository, { strict: false});
  });

  describe('cas nominal', () => {
    it('instanciates"', () => {
      expect(leagueRepository).toBeTruthy()
    });
  });

  describe('.list', () => {
    beforeEach(async () => {
      leagueRepository.list()
    })
    it('instanciates"', async () => {
      expect(modelStub.find).toHaveBeenCalled()
    });
  });
});
