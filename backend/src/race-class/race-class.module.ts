import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceClass } from './race-class.entity';
import { RaceClassService } from './race-class.service';
import { RaceClassController } from './race-class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RaceClass])],
  controllers: [RaceClassController],
  providers: [RaceClassService],
})
export class RaceClassModule {}
