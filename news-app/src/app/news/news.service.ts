import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = environment.apiKey; // Granted by newsapi.org

  constructor(private http: HttpClient) {}

  getSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey
    );
  }

  getArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
        this.apiKey
    );
  }

  getArticlesBySource(source: String) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.apiKey
    );
  }
}
