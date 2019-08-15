import { Action } from '@ngrx/store';

export enum PurchasesTypes {
    GET_PURCHASES = '[PURCHASES][GET]',
    GET_PURCHASES_SUCCESS = '[PURCHASES][GET] success',
    GET_PURCHASES_FAILURE = '[PURCHASES][GET] failure'
}

export class GetPurchases implements Action {
    readonly type = PurchasesTypes.GET_PURCHASES;
}
export class GetPurchasesSuccess implements Action {
    readonly type = PurchasesTypes.GET_PURCHASES_SUCCESS
    constructor(public payload: any){}
}
export class GetPurchasesFailure implements Action {
    readonly type = PurchasesTypes.GET_PURCHASES_FAILURE;
    constructor(public payload: any){}
}

export type PurchasesActions = 
GetPurchases | 
GetPurchasesSuccess |
GetPurchasesFailure ;