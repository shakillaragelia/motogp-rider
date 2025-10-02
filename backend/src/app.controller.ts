import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from './rider/rider.entity';
import { Team } from './team/team.entity';
import { RaceClass } from './race-class/race-class.entity';
import { RiderModule } from './rider/rider.module';
import { TeamModule } from './team/team.module';
import { RaceClassModule } from './race-class/race-class.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'motogp_db',
      entities: [Rider, Team, RaceClass],
      synchronize: true, //buat development aja, nanti produksi matiin
    }),

    RiderModule,
    TeamModule,
    RaceClassModule,
  ],
})
export class AppModule {}
