import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Decision } from '../interfaces/decision.interface';
import { CreateDecisionDto } from '../dtos/create-decision.dto';

@Injectable()
export class DecisionService {
  constructor(
    @InjectModel('Decision') private readonly decisionModel: Model<Decision>,
  ) {}

  async getAllDecisions(): Promise<Decision[]> {
    return this.decisionModel.find().exec();
  }

  async getDecision(decisionId): Promise<Decision> {
    return this.decisionModel.findById(decisionId);
  }

  async addDecision(createDecisionDto): Promise<Decision> {
    const newDecision = await new this.decisionModel(createDecisionDto);
    return newDecision.save();
  }

  async updateDecision(decisionId: string, createDecisionDto: CreateDecisionDto): Promise<Decision> {
    return this.decisionModel.findByIdAndUpdate(decisionId, createDecisionDto, { new: true });
  }

  async deleteDecision(decisionId: string) {
    return this.decisionModel.findByIdAndDelete(decisionId);
  }
}
