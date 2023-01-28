import { Inject, Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import axios, { AxiosRequestConfig } from 'axios';
import { catchError, map } from 'rxjs/operators';
import { HttpClientService } from './base-http-client-axios.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AxiosServicesService {
  baseUrl = 'https://reqres.in/';
  constructor(@Inject('HttpClientService') private http: HttpClientService) { }

  // getGitHubProfile(path: string) {
  //   let url = this.baseUrl+path;
  //   return this.http.get(url);
  // }

  validateLogin(path: string,params:any):Observable<object> {
    let url = this.baseUrl+path;
    let result:any = this.http.post(url,params).pipe(catchError(this.handleError));
     return result;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
}
}
