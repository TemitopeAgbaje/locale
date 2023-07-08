import { Body, Controller, Post,Get } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsDto } from './regions.dto';
import { Region } from './regions.entity';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionService: RegionsService) {}

  @Post('')
  createRegion(@Body() regionDto: RegionsDto) {
    return this.regionService.addRegion(regionDto);
  }

  @Get('/all')
  findAll(): Promise<Region[]> {
    return this.regionService.getRegions();
  }
}
