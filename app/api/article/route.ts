import ArticleModel from "@/features/blog/models/Article";
import { Article } from "@/features/blog/types/Article";
import { NextResponse } from "next/server";

export const dynamic = "auto";

export async function GET(req: Request) {
  const articles = await ArticleModel.find();

  return NextResponse.json({
    ok: true,
    isEmpty: !articles.length,
    data: articles || [],
    error: null
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await ArticleModel.create<Article>(body);

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error,
    });
  }
}
