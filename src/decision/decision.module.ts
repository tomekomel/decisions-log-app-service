import { Module } from '@nestjs/common';
import { DecisionService } from './services/decision.service';

@Module({
  providers: [DecisionService]
})
export class DecisionModule {}
