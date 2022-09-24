import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Source } from '../models/source';
import { Article } from '../models/article';
import { ArticleResponseData } from '../models/article-response-data';
import { SourceResponseData } from '../models/source-response-data';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = environment.apiKey; // Granted by newsapi.org

  constructor(private http: HttpClient) {}

  getSources() {
    return this.http.get<SourceResponseData>(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey
    );
  }

  getArticles() {
    return this.http.get<ArticleResponseData>(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
        this.apiKey
    );
  }

  getArticlesBySource(source: String) {
    return this.http.get<ArticleResponseData>(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.apiKey
    );
  }
}
