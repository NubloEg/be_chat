import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {

  constructor(@InjectModel(Article.name) private readonly articleModel:Model<ArticleDocument>){
    
  }

  create(createArticleDto: CreateArticleDto):Promise<Article> {
    const newArticle=new this.articleModel(createArticleDto)
    return newArticle.save()
  }

  async findAll():Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  findOne(id: number):Promise<Article> {
    return this.articleModel.findById(id)
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
