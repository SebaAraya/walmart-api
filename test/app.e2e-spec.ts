import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
      const res:any =  await request(app.getHttpServer())
      .get('/products')
      .expect(200);

      console.log("----------", res.body)

      expect(res.body).toEqual(
        expect.arrayContaining([{
          _id: "6056b963e339ae61aeb0bf3b",
          id: 1,
          brand: "Marca1",
          description: "Televisión 54''",
          image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
          price: 80000
          }]),
      );;
  });
});
