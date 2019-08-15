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
import { PurchaseslistComponent } from './containers/purchaseslist/purchaseslist.component';

@NgModule({
  declarations: [PurchaseslistComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('purchases', purchasesReducer),
    EffectsModule.forFeature([PurchasesEffects]),
  ],
  providers: [
    PurchasesEffects,
    PurchasesServices
  ],
  exports: [PurchaseslistComponent]
})
export class PurchasesModule { }
