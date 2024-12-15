import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { createTestingModule } from '@test/setup';

describe('ExampleController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const testModuleBuilder = createTestingModule();
    const testModule = await testModuleBuilder.compile();
    app = testModule.createNestApplication();
    await app.init();
  });

  describe('example', () => {
    it('should create example and return', async () => {
      // Arrange
      const createExampleDto = { value: 'example' };

      // Act
      const result = await request(app.getHttpServer())
        .post('/example')
        .send(createExampleDto);

      // Assert
      expect(result).toBeDefined();
      expect(result.status).toBe(201);
      expect(result.body).toBeDefined();
      expect(result.body.id).toBeDefined();
      expect(result.body.value).toBe(createExampleDto.value);
    });

    it('should get example by id', async () => {
      // Arrange
      const createExampleDto = { value: 'example' };
      const createResult = await request(app.getHttpServer())
        .post('/example')
        .send(createExampleDto);

      // Act
      const getResult = await request(app.getHttpServer()).get(
        `/example/${createResult.body.id}`,
      );

      // Assert
      expect(getResult).toBeDefined();
      expect(getResult.status).toBe(200);
      expect(getResult.body).toBeDefined();
      expect(getResult.body.id).toBe(createResult.body.id);
      expect(getResult.body.value).toBe(createExampleDto.value);
    });
  });
});
