import { Category } from "./Category";

export type Article = {
  _id?: string;
  title: string;
  thumbnail: string;
  description: string;
  content: string;
  slug: string;
  categories: Category[];
  createdAt?: string;
  updatedAt?: string;
};
