import { Connection } from "mongoose";
import { ProductSchema } from "./product.schema";

export const productsProviders = [
  {
    provide: "PRODUCT_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("products", ProductSchema, "products"),
    inject: ["DATABASE_CONNECTION"]
  }
];
