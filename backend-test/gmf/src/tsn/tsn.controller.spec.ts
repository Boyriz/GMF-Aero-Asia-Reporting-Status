import { Test, TestingModule } from '@nestjs/testing';
import { TsnController } from './tsn.controller';

describe('TsnController', () => {
  let controller: TsnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TsnController],
    }).compile();

    controller = module.get<TsnController>(TsnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
