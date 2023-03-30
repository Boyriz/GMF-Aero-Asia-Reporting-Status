import { Test, TestingModule } from '@nestjs/testing';
import { InstallDatesService } from './install-dates.service';

describe('InstallDatesService', () => {
  let service: InstallDatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallDatesService],
    }).compile();

    service = module.get<InstallDatesService>(InstallDatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
