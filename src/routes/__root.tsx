import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ChatWidget } from "@/components/ChatWidget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "رحلات البيّض — اكتشف كنوز ولاية البيّض السياحية والأثرية" },
      { name: "description", content: "وكالة سياحية متخصصة في تنظيم رحلات لاكتشاف المواقع الأثرية والسياحية في ولاية البيّض بالجزائر." },
      { name: "author", content: "El Bayadh Travel" },
      { property: "og:title", content: "رحلات البيّض — اكتشف كنوز ولاية البيّض السياحية والأثرية" },
      { property: "og:description", content: "وكالة سياحية متخصصة في تنظيم رحلات لاكتشاف المواقع الأثرية والسياحية في ولاية البيّض بالجزائر." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "رحلات البيّض — اكتشف كنوز ولاية البيّض السياحية والأثرية" },
      { name: "twitter:description", content: "وكالة سياحية متخصصة في تنظيم رحلات لاكتشاف المواقع الأثرية والسياحية في ولاية البيّض بالجزائر." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0583d86d-5e62-4e0d-baaa-5137437bd2c3/id-preview-cbb13732--8ec8c28d-3440-458d-b92c-aed06816f20b.lovable.app-1777216659784.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0583d86d-5e62-4e0d-baaa-5137437bd2c3/id-preview-cbb13732--8ec8c28d-3440-458d-b92c-aed06816f20b.lovable.app-1777216659784.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <ChatWidget />
    </>
  );
}
