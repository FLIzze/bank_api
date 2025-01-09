import { Test, TestingModule } from '@nestjs/testing';
import { AdvisorsController } from './advisors.controller';
import { AdvisorsModule } from './advisors.module';

describe('AdvisorsController', () => {
  let controller: AdvisorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvisorsController],
      imports: [AdvisorsModule],
    }).compile();

    controller = module.get<AdvisorsController>(AdvisorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
