import {
  Resolver,
  Query,
} from '@nestjs/graphql';

import { Article } from "./model/article.model";

@Resolver(of => Article)
export class ArticleResolver {
  @Query(returns => Article)
  getArticle() {
    return {
      id: '123',
      content: 'content',
    }
  }
}
