import { NextResponse, type NextRequest } from "next/server";
import { localeMeta } from "./i18n/config";
import { findRouteInAnyLocale, internalPath, path, resolve } from "./i18n/routes";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const route = resolve(pathname);

  if (route.kind === "unknown") {
    const [first, ...rest] = route.rest.split("/").filter(Boolean);
    const foreign = first ? findRouteInAnyLocale(first) : null;
    if (foreign) {
      const target = new URL(path(route.locale, foreign.key, rest[0]) + search, request.url);
      return NextResponse.redirect(target, 308);
    }
  }

  const destination =
    route.kind === "unknown"
      ? `/${route.locale}/${route.rest}`
      : internalPath(route.locale, route.key, route.slug);

  if (route.kind === "page" && route.redundantPrefix) {
    const target = new URL(path(route.locale, route.key, route.slug) + search, request.url);
    return NextResponse.redirect(target, 308);
  }

  const response = NextResponse.rewrite(new URL(destination + search, request.url));

  response.headers.set("Vary", "Accept-Language");
  response.headers.set("Content-Language", localeMeta[route.locale].htmlLang);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.xml|images/|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml|webmanifest)$).*)",
  ],
};
