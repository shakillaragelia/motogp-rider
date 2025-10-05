import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceSchedule } from './race-schedule.entity';
import { RaceScheduleService } from './race-schedule.service';
import { RaceScheduleController } from './race-schedule.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RaceSchedule])],
  providers: [RaceScheduleService],
  controllers: [RaceScheduleController],
})
export class RaceScheduleModule {}
