import { CreateExampleDto } from "@dtos/example.dto";
import { Example } from "@models/example.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class ExampleRepository {
    constructor(@InjectModel(Example) private example: typeof Example) {}

    async createExample(createExampleDto: CreateExampleDto) {
        return this.example.create({ ...createExampleDto });
    }

    async getExample(id: string) {
        return this.example.findOne({ where: { id } });
    }    
}