import { NextRequest, NextResponse } from "next/server";

const DOCS_HOST = "ui.oratiq.com";
const APEX_HOSTS = new Set(["oratiq.com", "www.oratiq.com"]);

/**
 * One app, two faces. The apex domain is the marketing site; the docs,
 * registry, and machine-readable surfaces live on the docs subdomain.
 * Locally (localhost) nothing rewrites, so both are reachable directly.
 */
export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const { pathname } = request.nextUrl;

  if (APEX_HOSTS.has(host)) {
    // Canonical home for docs/registry is the subdomain — one URL per page.
    if (
      pathname.startsWith("/design-library") ||
      pathname.startsWith("/r/") ||
      pathname.startsWith("/demos/") ||
      pathname === "/llms.txt" ||
      pathname === "/registry.json"
    ) {
      return NextResponse.redirect(`https://${DOCS_HOST}${pathname}`, 308);
    }
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/home", request.url));
    }
  }

  // The docs subdomain's front door is the library overview.
  if (host === DOCS_HOST && (pathname === "/" || pathname === "/home")) {
    return NextResponse.redirect(
      new URL("/design-library", request.url),
      308,
    );
  }

  return NextResponse.next();
}

export const config = {
  // Static assets and Next internals skip the middleware entirely.
  matcher: ["/((?!_next/|favicon\\.ico).*)"],
};
