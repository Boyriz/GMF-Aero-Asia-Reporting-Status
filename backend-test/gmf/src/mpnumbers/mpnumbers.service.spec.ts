import { Test, TestingModule } from '@nestjs/testing';
import { MpnumbersService } from './mpnumbers.service';

describe('MpnumbersService', () => {
  let service: MpnumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpnumbersService],
    }).compile();

    service = module.get<MpnumbersService>(MpnumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
