import { Test, TestingModule } from '@nestjs/testing';
import { TsnService } from './tsn.service';

describe('TsnService', () => {
  let service: TsnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TsnService],
    }).compile();

    service = module.get<TsnService>(TsnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
