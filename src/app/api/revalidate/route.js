export const dynamic = "force-dynamic";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextResponse, NextNextRequestuest } from "next/server";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function POST() {
  const signature = NextRequest.headers[SIGNATURE_HEADER_NAME];
  const isValid = isValidSignature(
    JSON.stringify(NextRequest.body),
    signature,
    SANITY_WEBHOOK_SECRET
  );

  console.log(`===== Is the webhook NextRequestuest valid? ${isValid}`);

  // Validate signature
  if (!isValid) {
    NextResponse.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  try {
    const pathToRevalidate = NextRequest.body.slug.current;

    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await NextResponse.revalidate("/");

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    // Could not revalidate. The stale page will continue to be shown until
    // this issue is fixed.
    return NextResponse.status(500).send("Error while revalidating");
  }
}
