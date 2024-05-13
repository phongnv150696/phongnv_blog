import axiosClient from "@/common/configs/axiosClient";
import { Article } from "../types/Article";

export const fetchArticles = async () => {
  try {
    const res = await axiosClient.get(`/api/article`);

    return res.data;
  } catch (err) {
    console.error("Failed to fetch article list, detail: ", err);
  }
};

export const createArticle = async (data: Readonly<Article>) => {
  try {
    const res = await axiosClient.post(`/api/article`, data);

    if (res.status === 200) {
      alert("Tạo bài viết thành công!");
    } else {
      alert("Tạo bài viết không thành công!")
    }

    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch article list");
  }
};
