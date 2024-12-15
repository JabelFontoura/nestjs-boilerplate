import { Test, TestingModuleBuilder } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExampleModule } from '@modules/example.module';

export function createTestingModule(): TestingModuleBuilder {
  const testModuleBuilder = Test.createTestingModule({
    imports: [
      SequelizeModule.forRoot({
        dialect: 'sqlite',
        storage: ':memory:',
        autoLoadModels: true,
        synchronize: true,
      }),
      ExampleModule,
    ],
  });


  return testModuleBuilder;
}
