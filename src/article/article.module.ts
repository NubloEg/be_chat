import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article, ArticleSchema } from './schemas/article.schema';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports:[
    MongooseModule.forFeature([
      {name:Article.name,schema:ArticleSchema}
    ])
  ]
})
export class ArticleModule {}
