import { Test, TestingModule } from '@nestjs/testing';
import { NontimecontrolledController } from './nontimecontrolled.controller';

describe('NontimecontrolledController', () => {
  let controller: NontimecontrolledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NontimecontrolledController],
    }).compile();

    controller = module.get<NontimecontrolledController>(NontimecontrolledController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
