import { Article } from './article';

export interface ArticleResponseData {
  status: string;
  totalResults: number;
  articles: Article[];
}
