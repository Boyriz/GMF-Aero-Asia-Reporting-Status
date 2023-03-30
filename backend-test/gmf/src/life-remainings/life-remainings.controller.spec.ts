import { Test, TestingModule } from '@nestjs/testing';
import { LifeRemainingsController } from './life-remainings.controller';

describe('LifeRemainingsController', () => {
  let controller: LifeRemainingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifeRemainingsController],
    }).compile();

    controller = module.get<LifeRemainingsController>(LifeRemainingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
