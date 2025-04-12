import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

// Konfigurace pro Next.js
const withNextIntl = createNextIntlPlugin();
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Další možnosti konfigurace Next.js mohou být zde
};

// Export konfigurace s integrovanými pluginy pro analýzu a i18n
export default withAnalyzer(withNextIntl(nextConfig));
