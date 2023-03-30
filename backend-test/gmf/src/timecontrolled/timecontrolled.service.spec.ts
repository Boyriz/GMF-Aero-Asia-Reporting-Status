import { Test, TestingModule } from '@nestjs/testing';
import { TimecontrolledService } from './timecontrolled.service';

describe('TimecontrolledService', () => {
  let service: TimecontrolledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimecontrolledService],
    }).compile();

    service = module.get<TimecontrolledService>(TimecontrolledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
