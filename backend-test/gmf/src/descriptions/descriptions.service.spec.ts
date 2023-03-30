import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionsService } from './descriptions.service';

describe('DescriptionsService', () => {
  let service: DescriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescriptionsService],
    }).compile();

    service = module.get<DescriptionsService>(DescriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
