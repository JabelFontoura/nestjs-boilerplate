import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ExampleService } from '@services/example.service';
import { Example } from '@models/example.model';
import { CreateExampleDto } from '@dtos/example.dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  async createExample(
    @Body(ValidationPipe) createExampleDto: CreateExampleDto,
  ): Promise<Example> {
    return this.exampleService.createExample(createExampleDto);
  }

  @Get(':id')
  async getExample(@Param('id') id: string): Promise<Example> {
    return this.exampleService.getExample(id);
  }
}
