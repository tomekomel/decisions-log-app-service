import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecisionModule } from './decision/decision.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/decisions', { useNewUrlParser: true }),
    DecisionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
