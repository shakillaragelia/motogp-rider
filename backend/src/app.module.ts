import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { RiderModule } from './rider/rider.module';
import { TeamModule } from './team/team.module';
import { RaceClassModule } from './race-class/race-class.module';
import { AboutModule } from './about/about.module';
import { RaceScheduleModule } from './race-schedule/race-schedule.module';
import { ContactModule } from './contact/contact.module';

import { Rider } from './rider/rider.entity';
import { Team } from './team/team.entity';
import { RaceClass } from './race-class/race-class.entity';
import { About } from './about/about.entity';
import { RaceSchedule } from './race-schedule/race-schedule.entity';
import { Contact } from './contact/contact.entity';

import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'motogp',

      entities: [Rider, Team, RaceClass, About, RaceSchedule, Contact],

      synchronize: true,
      logging: true,
      dropSchema: true,
      autoLoadEntities: true,
    }),

    RiderModule,
    TeamModule,
    RaceClassModule,
    AboutModule,
    RaceScheduleModule,
    ContactModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
