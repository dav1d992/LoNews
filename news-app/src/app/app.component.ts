import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Article } from './models/article';
import { ArticleResponseData } from './models/article-response-data';
import { Source } from './models/source';
import { SourceResponseData } from './models/source-response-data';
import { NewsService } from './news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'news-app';
  sources: Source[] = [];
  articles: Article[] = [];
  selectedNewsChannel: string = 'Top 10 Trending News!';

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(
    private newsService: NewsService,
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.newsService.getArticles().subscribe((res: ArticleResponseData) => {
      this.articles = res.articles;
    });
    this.newsService.getSources().subscribe((res: SourceResponseData) => {
      this.sources = res.sources;
    });
  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res?.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
    this.cd.detectChanges();
  }

  searchSource(source: any) {
    this.newsService.getArticlesBySource(source.id).subscribe((res: any) => {
      this.selectedNewsChannel = source.name;
      this.articles = res.articles;
    });
  }
}
