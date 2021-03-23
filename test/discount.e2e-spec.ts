import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("DiscountController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ Check discounts having minimum amount to apply discount", async () => {
    const res: any = await request(app.getHttpServer())
      .post("/discounts/findByBrandAndAmount")
      .send({
        data: [{ brand: "Marca1", amount: 120000 }]
      })
      .expect(201);

    expect(res.body).toEqual([
      { brand: "Marca1", price: 120000, totalDiscount: 8000, type: "DISCOUNT" }
    ]);
  });

  it("/ Check discounts without having minimum amount to apply discount", async () => {
    const res: any = await request(app.getHttpServer())
      .post("/discounts/findByBrandAndAmount")
      .send({
        data: [{ brand: "Marca1", amount: 80000 }]
      })
      .expect(201);

    console.log("....", res.body);

    expect(res.body).toEqual([
      { brand: "Marca1", price: 40000, totalDiscount: 8000, type: "OFFER" }
    ]);
  });

  it("/ Check discounts with minimum amount and apply other brand discount", async () => {
    const res: any = await request(app.getHttpServer())
      .post("/discounts/findByBrandAndAmount")
      .send({
        data: [
          { brand: "Marca1", amount: 80000 },
          { brand: "Marca2", amount: 200000 }
        ]
      })
      .expect(201);

    console.log("....", res.body);

    expect(res.body).toEqual([
      { brand: "Marca2", price: 200000, totalDiscount: 5000, type: "DISCOUNT" },
      { brand: "Marca1", price: 40000, totalDiscount: 8000, type: "OFFER" }
    ]);
  });
});
