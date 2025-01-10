import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <p>Loading Navbar...</p>,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading Footer...</p>,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Marek Křůmal",
    default: "Marek Křůmal",
  },
  description: "Check out my website.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            <Suspense fallback={<NavbarLoading />}>
              <Navbar />
            </Suspense>
            <Suspense fallback={<MainLoading />}>
              <main className="relative mx-auto px-3 py-10">{children}</main>
            </Suspense>
            <Suspense fallback={<FooterLoading />}>
              <Footer />
            </Suspense>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function NavbarLoading() {
  return (
    <div className="p-4 font-mono text-center">
      <h1>Loading Navbar...</h1>
    </div>
  );
}

function MainLoading() {
  return (
    <div className="flex items-center justify-center h-screen font-mono text-xl">
      <h1>Loading Content...</h1>
    </div>
  );
}

function FooterLoading() {
  return (
    <div className="p-4 font-mono text-center">
      <h1>Loading Footer...</h1>
    </div>
  );
}
