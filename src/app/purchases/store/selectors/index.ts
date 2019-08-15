import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PurchasesModel } from '../models';

export const getFeatureState = createFeatureSelector<PurchasesModel>(
    'purchases'
);

export const purchases = createSelector(getFeatureState, (state: PurchasesModel) => state.purhcases);
export const arePurchasesloaded = createSelector(getFeatureState, (state: PurchasesModel) => state.loaded);
export const arePurchasesloading = createSelector(getFeatureState, (state: PurchasesModel) => state.loading);
export const purchasesErrror = createSelector(getFeatureState, (state: PurchasesModel) => state.error);
