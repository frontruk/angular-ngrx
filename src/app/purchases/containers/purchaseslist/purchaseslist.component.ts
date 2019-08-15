import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store/'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-purchaseslist',
  templateUrl: './purchaseslist.component.html',
  styleUrls: ['./purchaseslist.component.scss']
})
export class PurchaseslistComponent implements OnInit {
  public purchases$: Observable<Array<any>>;
  constructor(
    private readonly store: Store<fromStore.PurchasesModel>,
  ) { }

  ngOnInit() {
   
   this.purchases$ = this.store.pipe(select(fromStore.purchases))
  }
  getPurchases(){
    this.store.dispatch(new fromStore.GetPurchases())
  }
  addProduct(productName: string){
    const product = {
        id: 5,
        name: productName
    }
    this.store.dispatch(new fromStore.AddPurchase(product))
  }
}
