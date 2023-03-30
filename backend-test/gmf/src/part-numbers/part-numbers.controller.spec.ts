import { Test, TestingModule } from '@nestjs/testing';
import { PartNumbersController } from './part-numbers.controller';

describe('PartNumbersController', () => {
  let controller: PartNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartNumbersController],
    }).compile();

    controller = module.get<PartNumbersController>(PartNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
