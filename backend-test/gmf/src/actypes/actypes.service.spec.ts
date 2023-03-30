import { Test, TestingModule } from '@nestjs/testing';
import { ActypesService } from './actypes.service';

describe('ActypesService', () => {
  let service: ActypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActypesService],
    }).compile();

    service = module.get<ActypesService>(ActypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
