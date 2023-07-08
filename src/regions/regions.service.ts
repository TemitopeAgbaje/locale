import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionsDto } from './regions.dto';
import { Region } from 'src/typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region)
    private readonly regionsRepository: Repository<Region>,
  ) {}

  async addRegion(region: RegionsDto) {
    await this.regionsRepository.create(new RegionsDto());
    const newRegion = this.regionsRepository.save(region);
    console.log(region);
    return newRegion;
    // return "I am here"
  }

  async getRegions(): Promise<Region[]> {
    return await this.regionsRepository.find();
  }
}
