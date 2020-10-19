import { Module } from '@nestjs/common';
import { DecisionService } from './services/decision.service';
import { MongooseModule } from '@nestjs/mongoose';
import { decisionSchema } from './schemas/decision.schema';
import { DecisionController } from './controllers/decision.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Decision', schema: decisionSchema }]),
  ],
  controllers: [DecisionController],
  providers: [DecisionService],
})
export class DecisionModule {}
