import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PurchasesServices {
    constructor(private http: HttpClient){}

    getPurchase(){
        return of([
            {
                id: 0,
                name: 'Teddy bears',
                color: 'pink',
                value: 200
            },
            {
                id: 1,
                name: 'Soft drink',
                value: 2
            },
            {
                id: 2,
                name: 'camera',
                value: 149
            }
        ])
    }
}