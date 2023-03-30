import { Test, TestingModule } from '@nestjs/testing';
import { MpnumbersController } from './mpnumbers.controller';

describe('MpnumbersController', () => {
  let controller: MpnumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpnumbersController],
    }).compile();

    controller = module.get<MpnumbersController>(MpnumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
