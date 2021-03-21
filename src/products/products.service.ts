import { Injectable, Inject } from '@nestjs/common';
import { IProduct } from './interface/IProduct.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<IProduct>,
  ) {}

  async findAll() {
    return await this.productModel.find({}).exec(); 
  }
}
