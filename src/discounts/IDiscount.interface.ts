import { Document } from 'mongoose';

export interface IDiscount extends Document {
    id: Number,
    brand: string,
    threshold: number,
    discount: number,
}

export interface IFindDiscount extends Document {
    brand: string,
    amount: number
}

export enum ETypePromotion {
    DISCOUNT = "DISCOUNT",
    OFFER = "OFFER"
 }

export interface IPromotion{
    type: ETypePromotion
    brand: string
    threshold: number
    totalDiscount: number
}