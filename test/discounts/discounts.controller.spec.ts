import { Test, TestingModule } from '@nestjs/testing';
import { DiscountsController } from '../../src/discounts/discounts.controller';
import { DiscountsService } from '../../src/discounts/discounts.service';

describe('DiscountsController', () => {
  let controller: DiscountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountsController],
      providers: [DiscountsService],
    }).compile();

    controller = module.get<DiscountsController>(DiscountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
