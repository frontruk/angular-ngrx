import { Action, createFeatureSelector } from '@ngrx/store';
import { PurchasesModel } from '../models/';
import * as fromActions from '../actions/';

export const initialState: PurchasesModel = {
    purhcases: [],
    loaded: false,
    loading: false,
    error: {},
}

export function purchasesReducer(
    state: PurchasesModel = initialState,
    action: fromActions.PurchasesActions
): PurchasesModel {
    switch(action.type) {
        case fromActions.PurchasesTypes.GET_PURCHASES:{
            return { 
                ...state,
                loading: true
            }
        } 
        case fromActions.PurchasesTypes.GET_PURCHASES_SUCCESS: {

            return { 
                ...state,
                purhcases: [ ...state.purhcases, ...action.payload],
                loading: false,
                loaded: true,
            }
        }
        case fromActions.PurchasesTypes.GET_PURCHASES_FAILURE: {
            return { 
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
            }
        }
        case fromActions.PurchasesTypes.ADD_PURCHASE:{
            return { 
                ...state,
                loading: true
            }
        } 
        case fromActions.PurchasesTypes.ADD_PURCHASE_SUCCESS: {
           
            return { 
                ...state,
                purhcases: [...state.purhcases, action.payload],
            }
        }
        case fromActions.PurchasesTypes.ADD_PURCHASE_FAILURE: {
            return { 
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
            }
        }
        default: 
            return state;
    }
}

export const getPurchases = (initialState: PurchasesModel) => initialState.purhcases;
export const loading = (initialState: PurchasesModel) => initialState.loading;
export const loaded = (initialState: PurchasesModel) => initialState.loaded;
export const error = (initialState: PurchasesModel) => initialState.error;