import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientService } from './base-http-client-axios.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpClientService implements HttpClientService {

  constructor(private http: HttpClient) { }
    post(url: string, arg1: never[]): unknown {
        throw new Error('Method not implemented.');
    }

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(endPoint, this.SetHeaders());
  }

  private SetHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'someAuthToken');
    return { headers };
  }
}
