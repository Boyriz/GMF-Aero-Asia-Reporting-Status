import { Test, TestingModule } from '@nestjs/testing';
import { LifeRemainingsService } from './life-remainings.service';

describe('LifeRemainingsService', () => {
  let service: LifeRemainingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifeRemainingsService],
    }).compile();

    service = module.get<LifeRemainingsService>(LifeRemainingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
