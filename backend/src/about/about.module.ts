import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './about.entity';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  providers: [AboutService],
  controllers: [AboutController],
})
export class AboutModule {}
