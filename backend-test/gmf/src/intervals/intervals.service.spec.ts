import { Test, TestingModule } from '@nestjs/testing';
import { IntervalsService } from './intervals.service';

describe('IntervalsService', () => {
  let service: IntervalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntervalsService],
    }).compile();

    service = module.get<IntervalsService>(IntervalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
