import { Test, TestingModule } from '@nestjs/testing';
import { NontimecontrolledService } from './nontimecontrolled.service';

describe('NontimecontrolledService', () => {
  let service: NontimecontrolledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NontimecontrolledService],
    }).compile();

    service = module.get<NontimecontrolledService>(NontimecontrolledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
