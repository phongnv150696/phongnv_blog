import { Article } from "./Article";

export type Category = {
  _id?: string;
  title: string;
  description: string;
  slug: string;
  articles?: Article[]
  createdAt?: string;
  updatedAt?: string;
};