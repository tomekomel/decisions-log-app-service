import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { DecisionService } from '../services/decision.service';
import { CreateDecisionDto } from '../dtos/create-decision.dto';
import { Response } from 'express';

@Controller('decisions')
export class DecisionController {
  constructor(private readonly decisionService: DecisionService) {}

  @Post()
  async addDecision(@Body() createDecisionDto: CreateDecisionDto) {
    await this.decisionService.addDecision(createDecisionDto);
  }

  @Get()
  async getAllDecisions(@Res() res: Response) {
    const decisions = await this.decisionService.getAllDecisions();
    return res.status(HttpStatus.OK).json(decisions);
  }
}
