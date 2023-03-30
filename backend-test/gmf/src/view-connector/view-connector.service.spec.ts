import { Test, TestingModule } from '@nestjs/testing';
import { ViewConnectorService } from './view-connector.service';

describe('ViewConnectorService', () => {
  let service: ViewConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewConnectorService],
    }).compile();

    service = module.get<ViewConnectorService>(ViewConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
