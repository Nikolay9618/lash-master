import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FbCreateResponse, Info } from "./interfaces";


@Injectable({ providedIn: "root" })
export class PostsService {
   constructor(private http: HttpClient) { }

   create(info: Info): Observable<Info> {
      return this.http.post<Info>(`${environment.fbDBUrl}/info.json`, info)
         .pipe(map((response: FbCreateResponse) => {
            return {
               ...info,
               id: response.name,
               date: new Date(info.date)
            }
         }))
   }

   getAll(): Observable<Info[]> {
      return this.http.get(`${environment.fbDBUrl}/info.json`)
         .pipe(map((response: { [key: string]: any }) => {
            return Object
               .keys(response)
               .map(key => ({
                  ...response[key],
                  id: key,
                  date: new Date(response[key].date)
               }))
         }))
   }

   remove(id: string | undefined): Observable<void> {
      if (typeof id === undefined) {
         throw new Error('Не можем удалить')
      } else {

         return this.http.delete<void>(`${environment.fbDBUrl}/info/${id}.json`)
      }
   }
}