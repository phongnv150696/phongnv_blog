"use client";
import React from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import {
  DashboardTwoTone,
  FileTwoTone,
  PictureTwoTone,
  SettingTwoTone,
  TagTwoTone,
} from "@ant-design/icons";
import Image from "next/image";

type MenuItem = Required<MenuProps>["items"][number];

export const NAVIGATION_ITEMS: MenuItem[] = [
  {
    key: "logo",
    label: <Image src="/logo.png" alt="logo" fill objectFit="contain" />,
    style: {
      height: 100,
    },
  },
  {
    key: "dashboard",
    label: <Link href="/admin/dashboard">Bảng điều khiển</Link>,
    icon: <DashboardTwoTone />,
  },
  {
    key: "articles",
    label: <Link href="/admin/manage/articles">Quản lý bài viết</Link>,
    icon: <FileTwoTone />,
  },
  {
    key: "categories",
    label: <Link href="/admin/manage/categories">Quản lý chuyên mục</Link>,
    icon: <TagTwoTone />,
  },
  {
    key: "banners",
    label: <Link href="/admin/manage/banners">Quản lý banners</Link>,
    icon: <PictureTwoTone />,
  },
  {
    key: "settings",
    label: <Link href="/admin/settings">Cài đặt</Link>,
    icon: <SettingTwoTone />,
  },
];

const SideNavigation = () => {
  return (
    <Menu
      defaultActiveFirst
      defaultSelectedKeys={['dashboard']}
      items={NAVIGATION_ITEMS}
      mode="vertical"
      style={{
        width: 256,
        height: "100%",
        overflow: "auto",
      }}
    />
  );
};

export default SideNavigation;
