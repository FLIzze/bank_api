import { Test, TestingModule } from '@nestjs/testing';
import { CreditcardsController } from './creditcards.controller';
import { CreditcardsModule } from './creditcards.module';

describe('CreditcardsController', () => {
  let controller: CreditcardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditcardsController],
      imports: [CreditcardsModule],
    }).compile();

    controller = module.get<CreditcardsController>(CreditcardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
