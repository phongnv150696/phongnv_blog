"use client";
import React, { useEffect, useState } from "react";
import { fetchArticles } from "../utils/service";
import { Table } from "antd";
import { Article } from "../types/Article";

const ArticleTable = async () => {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Table
      dataSource={data}
      columns={[
        {
          key: "thumbnail",
          dataIndex: "thumbnail",
          title: "Ảnh bài viết",
        },
        {
          key: "title",
          dataIndex: "title",
          title: "Tiêu đề",
        },
        {
          key: "description",
          dataIndex: "description",
          title: "Mô tả",
        },
        {
          key: "createdAt",
          dataIndex: "createdAt",
          title: "Thời gian đăng",
        },
      ]}
    />
  );
};

export default ArticleTable;
