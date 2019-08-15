import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { 
  PurchasesEffects,
  purchasesReducer, 
  PurchasesServices
} from './store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('purchases', purchasesReducer),
    EffectsModule.forFeature([PurchasesEffects]),
  ],
  providers: [
    PurchasesEffects,
    PurchasesServices
  ]
})
export class PurchasesModule { }
