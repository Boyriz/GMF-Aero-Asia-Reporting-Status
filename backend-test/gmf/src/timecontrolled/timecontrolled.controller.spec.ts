import { Test, TestingModule } from '@nestjs/testing';
import { TimecontrolledController } from './timecontrolled.controller';

describe('TimecontrolledController', () => {
  let controller: TimecontrolledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimecontrolledController],
    }).compile();

    controller = module.get<TimecontrolledController>(TimecontrolledController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
