import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromActions from '../actions/'
import { PurchasesServices } from '../services';
import {
    catchError,
    map,
    switchMap
} from 'rxjs/internal/operators';
import { of } from 'rxjs';

@Injectable()
export class PurchasesEffects {
    constructor(
        private actions$: Actions,
        private purchasesServices: PurchasesServices
    ){}

    @Effect({ dispatch: true })
    GetPurchase$ = this.actions$.pipe(
        ofType(fromActions.PurchasesTypes.GET_PURCHASES),
        switchMap(() => {
            return this.purchasesServices.getPurchase().pipe(
                map((payload: Array<any>) => new fromActions.GetPurchasesSuccess(payload)),
                catchError((e: HttpErrorResponse) => of(new fromActions.GetPurchasesFailure(e)))
            )
        })
    )


}