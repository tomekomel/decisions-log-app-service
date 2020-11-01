import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { DecisionService } from '../services/decision.service';
import { CreateDecisionDto } from '../dtos/create-decision.dto';
import { ConfigService } from '@nestjs/config';

@Controller('decisions')
export class DecisionController {
  constructor(
    private readonly decisionService: DecisionService,
    private configService: ConfigService,
  ) {}

  @Post()
  async addDecision(@Body() createDecisionDto: CreateDecisionDto) {
    await this.decisionService.addDecision(createDecisionDto);
  }

  @Get()
  async getAllDecisions(@Res() res: Response) {
    const decisions = await this.decisionService.getAllDecisions();
    return res.status(HttpStatus.OK).json(decisions);
  }

  @Get('/:decisionId')
  async getDecisionById(
    @Res() res: Response,
    @Param('decisionId') decisionId: string,
  ) {
    const decision = await this.decisionService.getDecision(decisionId);
    if (!decision) {
      throw new NotFoundException('Decision not found');
    }
    return res.status(HttpStatus.OK).json(decision);
  }

  @Post('/:decisionId/update')
  async updateDecision(
    @Res() res: Response,
    @Param('decisionId') decisionId: string,
    @Body() createDecisionDto: CreateDecisionDto,
  ) {
    const decision = await this.decisionService.updateDecision(
      decisionId,
      createDecisionDto,
    );
    if (!decision) {
      throw new NotFoundException('Decision not found');
    }
    return res.status(HttpStatus.OK).json(decision);
  }

  @Delete('/:decisionId')
  async deleteDecision(
    @Res() res: Response,
    @Param('decisionId') decisionId: string,
  ) {
    const decision = await this.decisionService.deleteDecision(decisionId);
    if (!decision) {
      throw new NotFoundException('Decision not found');
    }
    return res.status(HttpStatus.NO_CONTENT);
  }
}
