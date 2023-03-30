import { Test, TestingModule } from '@nestjs/testing';
import { NontcController } from './nontc.controller';

describe('NontcController', () => {
  let controller: NontcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NontcController],
    }).compile();

    controller = module.get<NontcController>(NontcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
