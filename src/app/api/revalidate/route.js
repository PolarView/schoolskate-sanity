export const dynamic = "force-dynamic";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(req) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const isValid = isValidSignature(JSON.stringify(req.body), signature, SANITY_WEBHOOK_SECRET);

  console.log(`===== Is the webhook request valid? ${isValid}`);

  // Validate signature
  // if (!isValid) {
  //   NextResponse.status(401).json({ success: false, message: "Invalid signature" });
  //   return;
  // }

  // await NextResponse.revalidate("/");

  // return NextResponse.json({ revalidated: true });
  revalidatePath("/");
  return NextResponse.json({ revalidated: true });
}
