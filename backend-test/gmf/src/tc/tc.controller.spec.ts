import { Test, TestingModule } from '@nestjs/testing';
import { TcController } from './tc.controller';

describe('TcController', () => {
  let controller: TcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TcController],
    }).compile();

    controller = module.get<TcController>(TcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
