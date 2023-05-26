import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';
/**
 * Les tests à prendre en compte sont celles de leagueController.
 * Pour le reste ça reste le même, par faute de temps je les ai pas implémenté. :)
 */
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello, this is the sports api please refere to the documentation for more info on how to use it');
    });
  });
});
