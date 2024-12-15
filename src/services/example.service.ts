import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExampleDto } from '@dtos/example.dto';
import { ExampleRepository } from '@repositories/example.repository';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async createExample(createExampleDto: CreateExampleDto) {
    return this.exampleRepository.createExample(createExampleDto);
  }

  async getExample(id: string) {
    const example = await this.exampleRepository.getExample(id);

    if (!example) {
      throw new NotFoundException(`Example ${id} not found`);
    }

    return example;
  }
}
