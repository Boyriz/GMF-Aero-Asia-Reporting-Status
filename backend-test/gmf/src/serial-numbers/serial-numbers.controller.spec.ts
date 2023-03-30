import { Test, TestingModule } from '@nestjs/testing';
import { SerialNumbersController } from './serial-numbers.controller';

describe('SerialNumbersController', () => {
  let controller: SerialNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerialNumbersController],
    }).compile();

    controller = module.get<SerialNumbersController>(SerialNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
