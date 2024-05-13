import CategoryModel from "@/features/blog/models/Category";
import { Category } from "@/features/blog/types/Category";
import { NextResponse } from "next/server";

export const dynamic = "auto";

export async function GET(req: Request) {
  const categories = await CategoryModel.find();

  return NextResponse.json({
    ok: true,
    isEmpty: !categories.length,
    data: categories || [],
    error: null,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await CategoryModel.create<Category>(body);

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
