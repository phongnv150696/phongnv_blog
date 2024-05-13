import { Schema, model, models } from "mongoose";
import { Article } from "../types/Article";

const ArticleSchema = new Schema<Article>(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    thumbnail: {
      type: Schema.Types.String,
      required: false,
      default: '/no-image.jpg'
    },
    description: {
      type: Schema.Types.String,
      required: false,
    },
    categories: [{
      type: Schema.Types.ObjectId,
      ref: 'categories'
    }],
    slug: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ArticleModel = models?.articles || model('articles', ArticleSchema);

export default ArticleModel;
