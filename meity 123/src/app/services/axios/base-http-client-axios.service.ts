import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import axios, { AxiosRequestConfig } from 'axios';
import { map } from 'rxjs/operators';

export interface HttpClientService {
  post<T>(url: string, arg1: any): Observable<T>;
  get<T>(endPoint: string): Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class BaseHttpClientAxiosService implements HttpClientService {

  constructor() { }


  get<T>(endPoint: string): Observable<T> {
    return from(axios.get<T>(endPoint, this.SetHeaders())).pipe(map(x => x.data));
  }

  post<T>(endPoint: string,data:object): Observable<T> {
    return from(axios.post<T>(endPoint,data, this.SetHeaders())).pipe(map(x => x.data));
  }

  private SetHeaders() {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const defaultOptions:any =  <AxiosRequestConfig> <unknown>{
        headers: {
            Authorization: 'someAuthToken',
        },
    };

    return defaultOptions;
  }
}
