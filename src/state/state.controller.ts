import { Body, Controller, Post, Delete, Param, Get } from '@nestjs/common';
import { StateDto } from './state.dto';
import { StateService } from './state.service';
import { State } from './state.entity';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get('/all')
  findAll(): Promise<State[]> {
    return this.stateService.findAll();
  }

  @Post('')
  createState(@Body() stateDto: StateDto) {
    return this.stateService.addState(stateDto);
  }

  @Delete(':id')
  async deleteState(@Param('id') id: number): Promise<void> {
    await this.stateService.deleteState(id);
  }
}
