// Dependecies
import { Action, createFeatureSelector, State } from '@ngrx/store';
import { PurchasesModel } from '../models/';
import * as fromActions from '../actions/';
import { PurchasesModule } from '../../purchases.module';

// IntialState : Type 
const intialState:PurchasesModel = {
    purchases: [],
    loaded: false,
    loading: false,
    error: false,
}
// Function : State , action
export function purchasesReducer(
    state: PurchasesModel = intialState,
    action: fromActions.PurchasesActions
): PurchasesModel{
    switch(action.type){
        case fromActions.PurchasesTypes.GET_PURCHASES:{
            return {
                ...state,
                loading: true
            }
        }
        case fromActions.PurchasesTypes.GET_PURCHASES_SUCCESS:{
            return{
                ...state,
                loading: false,
                loaded: true,
                purchases: [
                    ...state.purchases,
                    ...action.payload
                ]
            }
        }
        case fromActions.PurchasesTypes.GET_PURCHASES_FAILURE:{
            return {
                ...state,
                loading: false,
                loaded: false,
            }
        }
        default:
            return state;
    }

}

export const getPurchase = (state: PurchasesModel ) => state.purchases;
export const loading = (state: PurchasesModel ) => state.loading;
export const loaded = (state: PurchasesModel ) => state.loaded;
export const error = (state: PurchasesModel ) => state.error;