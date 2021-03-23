import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database.module';
import { DiscountsModule } from './discounts/discounts.module';

@Module({
  imports: [ProductsModule, DatabaseModule, ProductsModule, DiscountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}



