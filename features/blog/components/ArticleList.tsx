import React from "react";
import { default as ArticleElement } from "./Article";
import type { Article } from "../types/Article";
import { Empty } from "antd";
import { fetchArticles } from "../utils/service";

const ArticleList = async () => {
  const res = await fetchArticles();
  const articles = [...((res?.data as Article[]) || [])].sort(
    (a, b) =>
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  );

  return (
    <div className="flex flex-col gap-3 items-start">
      <h2 className="text-xl border-b-2 border-b-red-500 font-black">
        BÀI VIẾT MỚI NHẤT
      </h2>
      <div className="flex flex-col gap-5 w-full">
        {articles.length ? articles.map((article: Article) => {
          return <ArticleElement key={article._id} {...article} />;
        }) : <Empty description="Không có bài viết nào trong hệ thống" />}
      </div>
    </div>
  );
};

export default ArticleList;
