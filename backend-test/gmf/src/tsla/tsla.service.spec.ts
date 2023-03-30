import { Test, TestingModule } from '@nestjs/testing';
import { TslaService } from './tsla.service';

describe('TslaService', () => {
  let service: TslaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TslaService],
    }).compile();

    service = module.get<TslaService>(TslaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
