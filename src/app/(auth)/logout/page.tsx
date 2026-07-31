// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const tenantId = process.env.AZURE_AD_TENANT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI!;

  return NextResponse.redirect(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout` +
      `?post_logout_redirect_uri=${encodeURIComponent(redirectUri)}`,
  );
}
