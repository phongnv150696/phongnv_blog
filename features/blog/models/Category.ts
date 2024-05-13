import { Schema, model, models } from "mongoose";
import { Category } from "../types/Category";

const CategorySchema = new Schema<Category>(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: false,
    },
    slug: {
      type: Schema.Types.String,
      required: true,
    },
    articles: [{
      type: Schema.Types.ObjectId,
      ref: 'articles'
    }]
  },
  {
    timestamps: true,
  }
);

const CategoryModel = models?.categories || model('categories', CategorySchema);

export default CategoryModel;
