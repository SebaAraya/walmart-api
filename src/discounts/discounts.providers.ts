import { Connection } from "mongoose";
import { DiscountSchema } from "./discounts.schema";

export const discountProviders = [
  {
    provide: "DISCOUNT_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("discounts", DiscountSchema, "discounts"),
    inject: ["DATABASE_CONNECTION"]
  }
];
