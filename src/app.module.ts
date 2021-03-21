import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ProductsModule, DatabaseModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}



