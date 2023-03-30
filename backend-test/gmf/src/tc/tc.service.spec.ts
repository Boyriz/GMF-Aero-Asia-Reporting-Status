import { Test, TestingModule } from '@nestjs/testing';
import { TcService } from './tc.service';

describe('TcService', () => {
  let service: TcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TcService],
    }).compile();

    service = module.get<TcService>(TcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
