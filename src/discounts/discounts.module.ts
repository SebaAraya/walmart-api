import { Module } from "@nestjs/common";
import { DiscountsService } from "./discounts.service";
import { DiscountsController } from "./discounts.controller";

import { discountProviders } from "./discounts.providers";
import { DatabaseModule } from "../database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [DiscountsController],
  providers: [DiscountsService, ...discountProviders]
})
export class DiscountsModule {}
