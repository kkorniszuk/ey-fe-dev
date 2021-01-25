import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class ApiClient {
  private httpClient: HttpClient;
  private baseUrl: string;

  constructor(@Inject(HttpClient) http: HttpClient, @Inject(API_BASE_URL) baseUrl?: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
  }

  MakeSentimentAnalyse(command: MakeSentimentAnalyseCommand): Observable<any> {
    const url = this.baseUrl + 'tutaj/url/do/ep';

    const options: any = {
      body: command,
      observe: 'response',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };

    return this.httpClient.request('post', url, options);
  }
}

export class MakeSentimentAnalyseCommand {
  hashtag: string;
  fromDate: Date;
  limit: number;
  language: string;

}
