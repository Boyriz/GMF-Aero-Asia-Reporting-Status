import { Test, TestingModule } from '@nestjs/testing';
import { NontcService } from './nontc.service';

describe('NontcService', () => {
  let service: NontcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NontcService],
    }).compile();

    service = module.get<NontcService>(NontcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
