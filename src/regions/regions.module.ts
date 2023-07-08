import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { Region } from './regions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Region])],
  controllers: [RegionsController],
  providers: [RegionsService]
})
export class RegionsModule {}
