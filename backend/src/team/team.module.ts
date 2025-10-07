import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Rider } from 'src/rider/rider.entity';
import { RaceClass } from 'src/race-class/race-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Rider, RaceClass])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
