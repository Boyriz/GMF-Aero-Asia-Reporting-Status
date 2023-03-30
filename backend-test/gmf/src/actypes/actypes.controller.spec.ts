import { Test, TestingModule } from '@nestjs/testing';
import { ActypesController } from './actypes.controller';

describe('ActypesController', () => {
  let controller: ActypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActypesController],
    }).compile();

    controller = module.get<ActypesController>(ActypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
