import { Observable } from 'rxjs';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const url = this.baseUrl + 'analyze';
    const options: any = {
      body: {
        hashtag: command.hashtag,
        limit: command.limit,
        fromDate: command.fromDate,
        language: command.language
      },
      observe: 'response',
      headers: new HttpHeaders({
        'access-control-allow-origin': '*'
      })
    };

    return this.httpClient.request('post', url, options);
  }
}

export class MakeSentimentAnalyseCommand {
  constructor(hashtag: string, limit: number, date: string, language: string) {
    this.fromDate = date;
    this.hashtag = hashtag;
    this.limit = limit;
    this.language = language;
  }

  hashtag: string;
  fromDate: string;
  limit: number;
  language: string;
}
