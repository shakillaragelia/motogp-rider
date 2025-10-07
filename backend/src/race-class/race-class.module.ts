import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceClass } from './race-class.entity';
import { RaceService } from './race-class.service';
import { RaceController } from './race-class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RaceClass])],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceClassModule {}
