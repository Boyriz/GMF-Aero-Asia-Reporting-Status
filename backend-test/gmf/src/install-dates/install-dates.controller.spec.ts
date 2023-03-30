import { Test, TestingModule } from '@nestjs/testing';
import { InstallDatesController } from './install-dates.controller';

describe('InstallDatesController', () => {
  let controller: InstallDatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallDatesController],
    }).compile();

    controller = module.get<InstallDatesController>(InstallDatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
