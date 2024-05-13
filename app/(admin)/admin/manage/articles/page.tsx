"use client";
import ArticleTable from "@/features/blog/components/ArticleTable";
import { FileTwoTone } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import Link from "next/link";
import React from "react";

const ArticleManagePage = () => {
  return (
    <Flex vertical gap={3}>
      <Flex justify="space-between" align="center">
        <Typography.Title level={3}>
          <FileTwoTone
            style={{
              marginRight: "1rem",
            }}
          />
          Quản lý bài viết
        </Typography.Title>
        <Flex gap={3}>
          <Button type="primary" size="middle">
            <Link href="/admin/manage/articles/create">Tạo bài viết mới</Link>
          </Button>
        </Flex>
      </Flex>
      <ArticleTable />
    </Flex>
  );
};

export default ArticleManagePage;
