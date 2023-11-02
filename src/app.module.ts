import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, ArticleModule, MongooseModule.forRoot('mongodb+srv://boroda4kak:eeggoorr1@cluster0.73db5at.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
