import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionsController } from './descriptions.controller';

describe('DescriptionsController', () => {
  let controller: DescriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescriptionsController],
    }).compile();

    controller = module.get<DescriptionsController>(DescriptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
