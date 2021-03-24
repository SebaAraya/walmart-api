import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("Product Controller (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", async () => {
    const res: any = await request(app.getHttpServer())
      .get("/products")
      .expect(200);

    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({id: 1}),
        expect.objectContaining({brand: "Marca1" }),

        expect.objectContaining({description: "Televisión 54''" }),
        expect.objectContaining({image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg" }),
        expect.objectContaining({price: 80000 })
      ])
    );
  });
});
