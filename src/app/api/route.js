export const dynamic = "force-dynamic";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import next from "next";
import { NextResponse } from "next/server";

export async function POST(request) {
  return NextResponse.json({ pass: 123 });
}
