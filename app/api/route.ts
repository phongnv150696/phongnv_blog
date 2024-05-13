import { NextResponse } from "next/server";

export const dynamic = "auto";
export async function GET(req: Request) {
  return NextResponse.json({
    ok: true,
  });
}
