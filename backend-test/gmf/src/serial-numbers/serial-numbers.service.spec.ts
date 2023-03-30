import { Test, TestingModule } from '@nestjs/testing';
import { SerialNumbersService } from './serial-numbers.service';

describe('SerialNumbersService', () => {
  let service: SerialNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerialNumbersService],
    }).compile();

    service = module.get<SerialNumbersService>(SerialNumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
