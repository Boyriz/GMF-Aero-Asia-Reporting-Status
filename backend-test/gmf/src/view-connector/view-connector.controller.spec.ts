import { Test, TestingModule } from '@nestjs/testing';
import { ViewConnectorController } from './view-connector.controller';

describe('ViewConnectorController', () => {
  let controller: ViewConnectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewConnectorController],
    }).compile();

    controller = module.get<ViewConnectorController>(ViewConnectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
