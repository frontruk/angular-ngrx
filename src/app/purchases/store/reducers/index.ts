import { Action } from '@ngrx/store';
import { PurchasesModel } from '../models/';
import * as fromActions from '../actions/';

const initialState: PurchasesModel = {
    purhcases: {},
    loaded: false,
    loading: false,
    error: {},
}

export function purchasesReducer(
    state: PurchasesModel[] = [initialState],
    action: fromActions.PurchasesActions
): PurchasesModel {
    switch(action.type) {
        case fromActions.PurchasesTypes.GET_PURCHASES:{
            return { 
                ...initialState,
                loading: true
            }
        } 
        case fromActions.PurchasesTypes.GET_PURCHASES_SUCCESS: {

            return { 
                ...initialState,
                purhcases: action.payload,
                loading: false,
                loaded: true,
            }
        }
        case fromActions.PurchasesTypes.GET_PURCHASES_FAILURE: {
            return { 
                ...initialState,
                loading: false,
                loaded: false,
                error: action.payload,
            }
        }
        default: 
            return initialState;
    }
}

export const getPurchases = (initialState: PurchasesModel) => initialState.purhcases;
export const loading = (initialState: PurchasesModel) => initialState.loading;
export const loaded = (initialState: PurchasesModel) => initialState.loaded;
export const error = (initialState: PurchasesModel) => initialState.error;