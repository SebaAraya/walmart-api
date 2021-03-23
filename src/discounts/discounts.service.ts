import { Injectable, Inject } from "@nestjs/common";
import {
  IDiscount,
  IFindDiscount,
  IPromotion,
  ETypePromotion
} from "./IDiscount.interface";
import { Model } from "mongoose";
import { info } from "console";

@Injectable()
export class DiscountsService {
  IFindDiscount() {
    throw new Error("Method not implemented.");
  }

  constructor(
    @Inject("DISCOUNT_MODEL")
    private discountModel: Model<IDiscount>
  ) {}

  async findDiscounts(infoProducts: IFindDiscount[]): Promise<IPromotion[]> {
    let brands = infoProducts.map((elem: IFindDiscount) => elem.brand);

    const discountsByBrands: Map<string, IDiscount> = await this.findByBrands(
      brands
    );

    let bestDiscount: IPromotion = {
      type: ETypePromotion.DISCOUNT,
      brand: "",
      price: 0,
      totalDiscount: 0
    };
    let bestOffer: IPromotion = {
      type: ETypePromotion.OFFER,
      brand: "",
      price: 0,
      totalDiscount: 0
    };

    for (const infoProduct of infoProducts) {
      const discount = discountsByBrands[infoProduct.brand];
      if (!discount) continue;
      if (
        infoProduct.amount >= discount.threshold &&
        bestDiscount.totalDiscount < discount.discount
      ) {
        bestDiscount.totalDiscount = discount.discount;
        bestDiscount.price = infoProduct.amount;
        bestDiscount.brand = infoProduct.brand;
      }
      if (discount.discount > bestOffer.totalDiscount) {
        bestOffer.totalDiscount = discount.discount;
        bestOffer.price = discount.threshold - infoProduct.amount;
        bestOffer.brand = infoProduct.brand;
      }
    }
    console.log("selected best Discount", bestDiscount);
    console.log("selected best Offer", bestOffer);
    let resp: IPromotion[] = [];

    if (bestDiscount.totalDiscount > 0) resp.push(bestDiscount);
    if (
      bestOffer.totalDiscount > 0 &&
      bestOffer.totalDiscount > bestDiscount.totalDiscount
    )
      resp.push(bestOffer);
    return resp;
  }

  private async findByBrands(
    brands: string[]
  ): Promise<Map<string, IDiscount>> {
    let map: Map<string, IDiscount> = new Map();
    const discountsFilter: IDiscount[] = await this.discountModel
      .find({ brand: { $in: brands } })
      .exec();
    discountsFilter.forEach((discount: IDiscount) => {
      map[discount.brand] = discount;
    });
    console.log("Brands finded", map);
    return map;
  }
}
