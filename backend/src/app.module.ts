import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RiderModule } from './rider/rider.module';
import { TeamModule } from './team/team.module';
import { RaceClassModule } from './race-class/race-class.module';
import { AboutModule } from './about/about.module';
import { RaceScheduleModule } from './race-schedule/race-schedule.module';
import { ContactModule } from './contact/contact.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      username: process.env.DB_USERNAME,
      password:
        process.env.DB_PASSWORD === '' ? undefined : process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
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
