import { Test, TestingModule } from '@nestjs/testing';
import { TslaController } from './tsla.controller';

describe('TslaController', () => {
  let controller: TslaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TslaController],
    }).compile();

    controller = module.get<TslaController>(TslaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
