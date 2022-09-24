import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Article } from './models/article';
import { Source } from './models/source';
import { NewsService } from './news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'news-app';
  sources: Source[] = [];
  articles: Article[] = [];

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getArticles().subscribe((res) => {
      console.log('articles ', res);
      this.articles = res;
    });
    this.newsService.getSources().subscribe((res) => {
      console.log('sources ', res);
      this.sources = res;
    });
  }
}
