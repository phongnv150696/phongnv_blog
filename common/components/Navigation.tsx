"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavigationItem } from "../types/common";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Chính trị",
    url: "/chuyen-muc/chinh-tri",
  },
  {
    title: "Quốc Phòng - An Ninh",
    url: "/chuyen-muc/quoc-phong-an-ninh",
  },
  {
    title: "Kinh tế",
    url: "/chuyen-muc/kinh-te",
  },
  {
    title: "Xã hội",
    url: "/chuyen-muc/xa-hoi",
  },
  {
    title: "Văn hóa",
    url: "/chuyen-muc/van-hoa",
  },
  {
    title: "Phóng sự - Điều tra",
    url: "/chuyen-muc/phong-su-dieu-tra",
  },
  {
    title: "Học tập - Trắc nghiệm",
    url: "/chuyen-muc/hoc-tap-trac-nghiem",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="relative mt-2">
      <ul className="p-0 flex items-center gap-5">
        {NAVIGATION_ITEMS.map((itemProps) => {
          const isActive = itemProps.url === pathname;
          const className = (() => {
            if (isActive) {
              return "bg-red-500 text-white px-5 rounded-lg text-sm uppercase font-medium block py-3 transition text-red-500";
            }
            return "text-sm uppercase font-medium block py-3 transition hover:text-red-500";
          })();
          return (
            <li key={itemProps.url}>
              <Link href={itemProps.url} className={className}>
                {itemProps.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
