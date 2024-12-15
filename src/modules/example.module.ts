import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExampleController } from '@controllers/example.controller';
import { ExampleService } from '@services/example.service';
import { Example } from '@models/example.model';
import { ExampleRepository } from '@repositories/example.repository';

@Module({
  imports: [SequelizeModule.forFeature([Example])],
  providers: [ExampleRepository, ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}
