import { Controller, Post, Body } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { IFindDiscount } from './IDiscount.interface';

@Controller('discounts')
export class DiscountsController {
  constructor(private readonly discountsService: DiscountsService) {
  }

  @Post('/findByBrandAndAmount')
  async findDiscounts(@Body() infoProduct: {data: IFindDiscount[]}) {
    console.log(infoProduct)
    try{
      return await this.discountsService.findDiscounts(infoProduct.data);
    }
    catch(ex){
      console.log(ex)
    }
    return [];
  }

}
