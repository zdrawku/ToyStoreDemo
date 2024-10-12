import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ToyStoreType } from '../models/toy-store-data/toy-store-type';
import { ToyCategoriesType } from '../models/toy-store-data/toy-categories-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ToyStoreDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getToyCategoriesList(): Observable<ToyCategoriesType[]> {
    return this.http.get<ToyCategoriesType[]>("https://my.appbuilder.dev/api/files?keyName=DataSources/vapkw2hw/1ebdjxan0lq")
      .pipe(catchError(ErrorHandlerService.handleError<ToyCategoriesType[]>('getToyCategoriesList', [])));
  }

  public getToyStoreList(): Observable<ToyStoreType[]> {
    return this.http.get<ToyStoreType[]>("https://my.appbuilder.dev/api/files?keyName=DataSources/vapkw2hw/kgx3yucn0hj")
      .pipe(catchError(ErrorHandlerService.handleError<ToyStoreType[]>('getToyStoreList', [])));
  }
}
