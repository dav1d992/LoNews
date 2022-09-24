import { Source } from './source';

export class Article {
  constructor(
    public title: string,
    public author: string,
    public content: string,
    public description: string,
    public publishedAt: Date,
    public url: string,
    public urlToImage: string,
    public source: Source
  ) {}
}
