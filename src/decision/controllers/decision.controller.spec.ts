import { Test, TestingModule } from '@nestjs/testing';
import { DecisionController } from './decision.controller';

describe('Decision Controller', () => {
  let controller: DecisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecisionController],
    }).compile();

    controller = module.get<DecisionController>(DecisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
