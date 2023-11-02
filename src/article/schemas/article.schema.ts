import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type ArticleDocument = Article & Document

@Schema()
export class Article{
    @Prop()
    title:string

    @Prop()
    description:string

    @Prop()
    author:string

    @Prop()
    likes:number

}

export const ArticleSchema = SchemaFactory.createForClass(Article)