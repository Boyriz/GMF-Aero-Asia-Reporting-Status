import { Test, TestingModule } from '@nestjs/testing';
import { PartNumbersService } from './part-numbers.service';

describe('PartNumbersService', () => {
  let service: PartNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartNumbersService],
    }).compile();

    service = module.get<PartNumbersService>(PartNumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
