import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FbCreateResponse, Price } from "./interfaces";


@Injectable({
   providedIn: 'root'
})

export class SetPriceService {

   constructor(private http: HttpClient) { }

   setPrice(price: Price): Observable<Price> {
      return this.http.patch<Price>(`${environment.fbDBUrl}/price.json`, price)
         .pipe(map(() => {
            return {
               ...price
            }

         }))
   }

   getPrice(): Observable<any> {
      return this.http.get(`${environment.fbDBUrl}/price.json`)
         .pipe(map((response: any) => {
            return response
         }))
   }

}