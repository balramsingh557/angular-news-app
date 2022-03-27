import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsApi } from 'src/constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(newsApi)
  }
}
