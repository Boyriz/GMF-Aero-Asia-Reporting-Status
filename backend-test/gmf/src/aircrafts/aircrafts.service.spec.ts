import { Test, TestingModule } from '@nestjs/testing';
import { AircraftsService } from './aircrafts.service';

describe('AircraftsService', () => {
  let service: AircraftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AircraftsService],
    }).compile();

    service = module.get<AircraftsService>(AircraftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
