import React from "react";
import Image from "next/image";
import type { Article } from "../types/Article";
import Link from "next/link";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeart } from "@fortawesome/free-solid-svg-icons";

const ArticleElement: React.FC<Article> = (props) => {
  return (
    <article className="flex flex-row gap-5 shadow-sm py-3 rounded items-stretch">
      <figure className="w-[460px] h-[300px] shrink-0 border overflow-hidden bg-gray-200">
        <Link href={"/bai-viet/" + props.slug}>
          <Image
            width={460}
            height={300}
            src={props.thumbnail || ""}
            alt={props.title}
            quality={100}
          />
        </Link>
      </figure>
      <div className="flex flex-col items-start gap-2">
        <div className="grow">
          <h1 className="text-3xl font-bold leading-snug">
            <Link href={"/bai-viet/" + props.slug}>{props.title}</Link>
          </h1>
          <div className="flex flex-row gap-2 my-2">
            <span className="text-sm text-gray-600 flex flex-row items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} width={18} />
              {format(
                new Date(props.createdAt ? props.createdAt! : props.updatedAt!),
                "dd/MM/yyyy"
              )}
            </span>
          </div>
          <p className="mb-2 text-sm text-gray-400">{props.description}</p>
        </div>
        <Link
          className="px-4 py-2 bg-red-500 text-white text-center text-sm opacity-70 hover:opacity-100 transition"
          href={"/bai-viet/" + props.slug}
        >
          Xem thêm
        </Link>
      </div>
    </article>
  );
};

export default ArticleElement;
