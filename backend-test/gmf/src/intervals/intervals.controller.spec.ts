import { Test, TestingModule } from '@nestjs/testing';
import { IntervalsController } from './intervals.controller';

describe('IntervalsController', () => {
  let controller: IntervalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntervalsController],
    }).compile();

    controller = module.get<IntervalsController>(IntervalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
