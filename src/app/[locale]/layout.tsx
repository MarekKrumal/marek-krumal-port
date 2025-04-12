import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s | Marek Křůmal",
    default: "Marek Křůmal",
  },
  description: "Check out my website.",
};

export default async function RootLayout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await rawParams;
  const { locale } = params;

  const supportedLocales = ["cz", "en"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="relative mx-auto px-3 py-10">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
