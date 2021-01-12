// import {v4 as uuidv4} from 'uuid';
// import uuid from 'uuid/v4';
import * as uuid from 'uuid';

export interface IBasket {
    id: string;
    items: IBasketItem[];
}

export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class Basket implements IBasket {
    id = uuid.v4();
    items: IBasketItem[] = [];
}

export interface IBasketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}